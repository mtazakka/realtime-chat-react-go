import Label from "./label"
import Input from "./input"

function Index(props:any) {
    const {type, id, placeholder, children, name} = props
    return (
        <div className="mb-4">
            <Label htmlFor={ id }>{children}</Label>
            <Input type= {type} id={ id } placeholder={placeholder} name={name} />
        </div>
    )
}

export default Index