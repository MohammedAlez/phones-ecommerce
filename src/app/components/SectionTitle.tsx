

type Props = {
    title:string,
    subTitle:string
}
export default function SectionTitle(props:Props){

    return (
        <div className="mx-auto max-w-[1300px] mb-20">
            <h1 className="font-bold text-3xl text-gray-800 sm:text-3xl text- md:text-3xl lg:text-4xl text-center mb-4">{props.title}</h1>
            <p className="mx-auto max-w-[600px] text-gray-600 font-medium text-center">{props.subTitle}</p>
        </div>
    )
}