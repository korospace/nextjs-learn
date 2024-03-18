export default function ArticleCrudPage({ params }: { params: { id: string[] }}) {
    return (
        <main>
            Detail Article {params.id}
        </main>
    )
}