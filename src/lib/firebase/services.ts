import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import { ApiRes, LoginReq, RegisterReq, UserDocument } from "../model/types";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => {
    return { docId: doc.id, ...doc.data() };
  });

  return data;
}

export async function retriveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));

  const data = snapshot.data();

  return data;
}

export async function register(data: RegisterReq): Promise<ApiRes> {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const users: UserDocument[] = snapshot.docs.map(
    (doc) => ({ docId: doc.id, ...doc.data() } as UserDocument)
  );

  if (users.length > 0) {
    return { status: false, code: 400, message: "email already exists" };
  } else {
    try {
      data.password = await bcrypt.hash(data.password, 10);

      const newData: UserDocument = {
        ...data,
        role: "member",
      };

      await addDoc(collection(firestore, "users"), newData);
      return { status: true, code: 201, message: "Registration successfully" };
    } catch (error: any) {
      return { status: false, code: 500, message: error.message };
    }
  }
}

export async function login(data: LoginReq): Promise<ApiRes> {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const users: UserDocument[] = snapshot.docs.map(
    (doc) => ({ docId: doc.id, ...doc.data() } as UserDocument)
  );

  if (users.length === 0) {
    return {
      status: false,
      code: 401,
      message: "username or password is wrong",
    };
  } else {
    const passwordConfirm = await bcrypt.compare(
      data.password,
      users[0].password
    );

    if (passwordConfirm === false) {
      return {
        status: false,
        code: 401,
        message: "username or password is wrong",
      };
    } else {
      return {
        status: true,
        code: 200,
        message: "login successfully",
        data: users[0],
      };
    }
  }
}

export async function LoginWithGoogle(data: UserDocument, callback: any) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const users: UserDocument[] = snapshot.docs.map(
    (doc) => ({ docId: doc.id, ...doc.data() } as UserDocument)
  );

  if (users.length > 0) {
    await updateDoc(doc(firestore, "users", users[0].docId || ""), data).then(
      () => {
        callback({ data: data });
      }
    );
  } else {
    data.role = "member";
    await addDoc(collection(firestore, "users"), data).then(() => {
      callback({ data: data });
    });
  }
}
