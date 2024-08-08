interface InputProps{
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({onChange}:InputProps) {
  const handleOnChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    onChange(event);
  }

  return(
    <input type="text" placeholder="Pesquisar" onChange={handleOnChange}/>
  )
}