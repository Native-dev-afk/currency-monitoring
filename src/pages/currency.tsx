import { Container, Stack } from "@mantine/core"
import { useEffect, useState } from "react"

const Monitoring = () => {
    const [currencies, setCurrencies] = useState()
    async function currencyFetch() {
        try {
            const response = await fetch("https://v6.exchangerate-api.com/v6/43ddde9af8525631d74b4bff/latest/USD");
            const jsonData = await response.json();
            console.log(jsonData);
            if (jsonData) {
                setCurrencies(jsonData)
            }
        }
        catch (e) {
            console.log({ e })
        }
    }
    useEffect(() => {
        currencyFetch()

    }, [])
    return (
        <div style={{ width: '100%', padding: 20, }}>
            <h2>Valyutaning bugingi kunlik ayirboshlash narxlari</h2>
            <Stack style={{ height: 400, flexWrap: 'wrap', width: '100%', alignSelf: 'center', overflow: 'scroll', marginRight: 20 }}>
                {
                    // @ts-expect-error
                    currencies?.conversion_rates ? Object.keys(currencies?.conversion_rates).map(function (key, index) {
                        return <div style={{ background: 'green', color: 'white', padding: 8, borderRadius: 4 }}>{
                            // @ts-expect-error
                            key + ": " + currencies?.conversion_rates[key]}</div>
                    }) : ''}
            </Stack>
        </div>
    )
}

export default Monitoring