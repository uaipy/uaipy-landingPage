import { Button } from "../button";

type ContentBlockTextProps = {
    title?: string;
    subheading?: string;
    description?: string;
    showBtn?: boolean;
    btnText?: string;
    btnVariant?: React.ComponentProps<typeof Button>["variant"];
    btnClassName?: string;
};

const ContentBlock = ({ title, subheading, description, showBtn, btnText, btnVariant, btnClassName }: ContentBlockTextProps) => {
    return (
        <div className="mt-5 border-b-1 border-uaipy-primary pb-10 md:flex md:justify-between items-center md:mt-10 lg:border-b-2">
            <img src="https://img.freepik.com/fotos-gratis/representacao-da-experiencia-do-utilizador-e-design-da-interface_23-2150169850.jpg?t=st=1745067658~exp=1745071258~hmac=e1f766fcc3383de1af6425d43c5ac73c9d46c9889b38542f2bdd3d815884c285&w=1060" alt="" className="hidden md:block md:w-80 md:h-80 md:rounded-full md:object-cover lg:w-100 lg:h-100 xl:w-120 xl:h-120" />
            <div className="md:max-w-[490px] md:ml-10 lg:max-w-[600px] xl:ml-15">
                <div className="flex flex-col-reverse">
                    <h1 className="text-2xl uppercase mb-5 md:text-3xl md:pr-7 lg:pr-0 lg:text-5xl">{title}</h1>
                    <h2 className="uppercase text-xs tracking-widest mb-2">{subheading}</h2>
                </div>
                <p className="text-sm mb-2 lg:text-base lg:max-w-[470px] xl:max-w-[520px]">{description}</p>
                {showBtn && (
                    <Button variant={btnVariant} size="lg" className={`${btnClassName ?? ""}`}>{btnText}</Button>
                )}
            </div>
        </div>
    )
}

export default ContentBlock;