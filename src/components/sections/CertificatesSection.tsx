import Container from "../common/Container";
import Card from "../ui/Card";
import { certificates } from "@/src/data/certificates";

export default function CertificatesSection() {
    return (
        <section className="border-t border-zinc-900 py-24">
            <Container>
                <p className="text-sm font-medium text-blue-500">
                    CERTIFICATES
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                    Certificates
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {certificates.map((certificate) => (
                        <Card key={`${certificate.name}-${certificate.date}`}>
                            <p className="text-sm text-blue-500">
                                {certificate.date}
                            </p>

                            <h3 className="mt-2 text-xl font-bold">
                                {certificate.name}
                            </h3>

                            <p className="mt-2 text-zinc-400">
                                {certificate.organization}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}