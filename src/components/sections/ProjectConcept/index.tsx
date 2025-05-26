import ContentBlock from "@/components/ui/ContentBlock";
import Metrics from "@/components/ui/Metrics"

const metrics = [
    {
        "id": 1,
        "title": "40+",
        "description": "Universidades envolvidas"
    },
    {
        "id": 2,
        "title": "60+",
        "description": "Projetos iniciados"
    },
    {
        "id": 3,
        "title": "10+",
        "description": "Artigos oficializados"
    }
];

export const ProjectConcept = () => {
    return (
        <section className="px-10 my-16 md:px-15 md:my-10 lg:px-20 xl:px-35">
            {/* add fade-in-up animation to metrics  */}
            <div className="hidden md:flex md:justify-center md:gap-20 md:mb-16 lg:gap-36 xl:gap-44">
                {metrics.map(metric => (
                    <Metrics
                        key={metric.id}
                        title={metric.title}
                        description={metric.description}
                    />
                ))}
            </div>
            <div className="hidden md:block">
                <ContentBlock marginDirection="md:ml-10 xl:ml-15" title="O início de tudo" subheading="Conceito do Projeto" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque ut risus iaculis tristique. Fusce leo mi, elementum ut elit in, lobortis consectetur tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque ut risus iaculis tristique. Fusce leo mi, elementum ut elit in, lobortis consectetur tortor." showBtn={true} btnText="Conheça+" btnVariant="gradient" btnClassName="mt-4 cursor-pointer" imgClassName="hidden md:block"/>
            </div>
            <div className="mt-12">
                <ContentBlock marginDirection="md:mr-10 xl:mr-15" title="Entenda melhor" subheading="Conceito do Projeto" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque ut risus iaculis tristique. Fusce leo mi, elementum ut elit in, lobortis consectetur tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque ut risus iaculis tristique. Fusce leo mi, elementum ut elit in, lobortis consectetur tortor." flexDirection="flex-col justify-center md:flex-row-reverse" showBtn={true} btnText="Saiba mais →" btnVariant="outline" btnClassName="mt-4 cursor-pointer" imgClassName="mb-12"/>
            </div>
        </section>
    );
};