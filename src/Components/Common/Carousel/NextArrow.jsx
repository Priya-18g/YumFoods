export default function NextArrow(props) {
    let {className,style,onClick} = props;

    return (
        <>
            <div className={className}
                style={{ ...style, background:"white",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",padding:"4px"}}
                onClick={onClick}>

            </div>
        </>
    );
}
