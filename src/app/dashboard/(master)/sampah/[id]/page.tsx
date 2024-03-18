export default function SampahDetailPage({ params }: { params: { id: string }}) {
    return (
        <main>
            Detail Sampah {params.id}
        </main>
    )
}