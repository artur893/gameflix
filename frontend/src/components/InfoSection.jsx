function Info(props) {
    return (
        <div className="bg-bg border-t-8 border-zinc-800 h-96 flex flex-col items-center justify-center">
            <p className="text-5xl my-6 font-bold">{props.title}</p>
            <p className="text-3xl my-6">{props.description}</p>
        </div>
    )
}

export { Info }