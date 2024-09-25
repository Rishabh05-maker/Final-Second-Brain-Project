

type Props = {
    name: string;
    vlaue: string;
    onChange: (event: any) => void;
    label: string;
    placeholder: string;
    className?: string
};



const AtmTextField = ({name, vlaue, onChange, label, placeholder, className, }: Props) => {
  return (
<div className="" >
    <label className="text-slate-700">{label}</label>
    <input type="text"
           id={name}
           name={name}
           value={vlaue}
           onChange={onChange}
           placeholder= {placeholder}
           className= {`border-gray-400 border-2 p-1 rounded-md ${className || ""}`}
     />
</div>

  )
}

export default AtmTextField