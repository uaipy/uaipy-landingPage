import ContentBlock from "@/components/ui/ContentBlock";

export const TechEvents = () => {
    return (
        <section className="px-10 md:px-15 lg:px-20 xl:px-35">
            <ContentBlock marginDirection="md:mr-15 xl:mr-20" title="Eventos" subheading="Participações em eventos" description="Acho legal trazer que já estamos marcando presença em eventos tech da região e afins. Fusce leo mi, elementum ut elit in." flexDirection="flex-col md:flex-row-reverse" imgClassName="mb-12 rounded-none w-full h-auto md:w-100 lg:w-120 xl:w-150" />
        </section>
    );
}