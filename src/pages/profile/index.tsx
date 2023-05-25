
import { Button, Stack } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';
import withAuth from '../../components/private-route/private-route';
import Select from '../../components/select';
import ApplicationSteps from '../../routes/profile';
const data = ["USD",
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KID",
  "KMF",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLE",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TVD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL",]
const Profile = () => {
  const [firstCur, setFirstCur] = useState();
  const [secondCur, setSecondCur] = useState();
  const [res, setRes] = useState();

  async function currencyFetch() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/43ddde9af8525631d74b4bff/pair/${firstCur}/${secondCur}/`);
      const jsonData = await response.json();
      console.log(jsonData);
      if (jsonData) {
        setRes(jsonData)
      }
    }
    catch (e) {
      console.log({ e })
    }
  }
  //https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT
  return (
    <>
      {/* <ApplicationSteps /> */}
      <div style={{ width: '100%', padding: 20, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ textAlign: 'center' }}>Valyutalar orasidagi farqni kuzatib boring:</h3>
        <form onSubmit={(e) => {
          e.preventDefault()
          if (!!firstCur && !!secondCur) {
            // showNotification({
            //   title: `Ro'yxatdan o'tish`,
            //   message: "Siz ro'yxatdan muvaffaqiyatli o'tdingiz. ✋",
            // });
            currencyFetch()
          }

        }} style={{ width: '300px', margin: '0 auto' }}>
          <Stack>
            <Select searchable required data={data} label="1 - valyuta tanlang" onChange={(e) => { setFirstCur(e) }} />
            <Select searchable required data={data} onChange={(e) => { setSecondCur(e) }} label="2 - valyuta tanlang" />
            <Button type='submit'>Ko'rish</Button>
          </Stack>
        </form>
        {res ? <h5 style={{ textAlign: 'center' }}>Ayirboshlash o'rtacha narxi: {res?.conversion_rate}</h5> : ''}
      </div>
    </>
  );
};

export default withAuth(Profile);
