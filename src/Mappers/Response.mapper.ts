export interface ITotal {
  population: string;
  confirmed: string;
  deceased: string;
  recovered: string;
  tested: string;
  vaccinated1: string;
  vaccinated2: string;
}
export interface IStateData {
  total: ITotal;
  pdfUrl: string;
  stateName: string;
  id: number;
}

function getStateNameById(id: string) {
  const states: { [key: string]: string } = {
    AN: "Andaman and Nicobar Islands",
    AP: "Andhra Pradesh",
    AR: "Arunachal Pradesh",
    AS: "Assam",
    BR: "Bihar",
    CH: "Chandigarh",
    CT: "Chhattisgarh",
    DL: "Delhi",
    DN: "Dadra and Nagar Haveli and Daman and Diu",
    GA: "Goa",
    GJ: "Gujarat",
    HP: "Himachal Pradesh",
    HR: "Haryana",
    JH: "Jharkhand",
    JK: "Jammu and Kashmir",
    KA: "Karnataka",
    KL: "Kerala",
    LA: "Ladakh",
    LD: "Lakshadweep",
    MH: "Maharashtra",
    ML: "Meghalaya",
    MN: "Manipur",
    MP: "Madhya Pradesh",
    MZ: "Mizoram",
    NL: "Nagaland",
    OR: "Odisha",
    PB: "Punjab",
    PY: "Puducherry",
    RJ: "Rajasthan",
    SK: "Sikkim",
    TG: "Telangana",
    TN: "Tamil Nadu",
    TR: "Tripura",
    TT: "India",
    UP: "Uttar Pradesh",
    UT: "Uttarakhand",
    WB: "West Bengal",
  };

  return states[id] || "State not found";
}

function ResponseMapper(data: any): IStateData[] {
  const statesArr = Object.keys(data!);
  const response: IStateData[] = statesArr.map((x: any, index: number) => {
    return {
      stateName: getStateNameById(x),
      total: {
        recovered: data[x].total.recovered,
        confirmed: data[x].total.confirmed,
        deceased: data[x].total.deceased,
        active: data[x].total.confirmed - data[x].total.recovered,
        population: data[x].meta.population,
        tested: data[x].total.tested,
        vaccinated1: data[x].total.vaccinated1,
        vaccinated2: data[x].total.vaccinated2,
      },
      pdfUrl: data[x].meta.tested.source,
      id: index,
    };
  });
  return response;
}

export default ResponseMapper;
