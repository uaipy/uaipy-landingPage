import ContentBlock from "@/components/ui/ContentBlock"
import team from "@/assets/time.jpg"

export const Team = () => {
    return (
        <section className="px-10 md:px-15 lg:px-20 xl:px-35">
            <ContentBlock marginDirection="md:ml-10 xl:ml-15" title="Nosso time" subheading="Colaboradores envolvidos" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque ut risus iaculis tristique. Fusce leo mi, elementum ut elit in, lobortis consectetur tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque ut risus iaculis tristique. Fusce leo mi, elementum ut elit in, lobortis consectetur tortor." flexDirection="flex-col justify-center md:flex-row" showBtn={false} staticImage={team} imgClassName="max-w-full md:max-w-6/10 lg:max-w-5/10 mb-12 md:mb-0"/>
        </section>
    )
}