interface AmountProps{
    amount?:number
}
export function Amount({amount}:AmountProps){
    return(
        <span className="text-[0.813rem]">{amount}</span>
    )
}