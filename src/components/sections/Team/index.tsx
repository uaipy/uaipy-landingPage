import ContentBlock from "@/components/ui/ContentBlock"

export const Team = () => {
    return (
        <section className="px-10 md:px-15 lg:px-20 xl:px-35">
            <ContentBlock marginDirection="md:ml-10 xl:ml-15" title="Nosso time" subheading="Colaboradores envolvidos" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque ut risus iaculis tristique. Fusce leo mi, elementum ut elit in, lobortis consectetur tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque ut risus iaculis tristique. Fusce leo mi, elementum ut elit in, lobortis consectetur tortor." flexDirection="flex-col justify-center md:flex-row" showBtn={false} imgClassName="mb-12 md:mb-0"/>
        </section>
    )
}