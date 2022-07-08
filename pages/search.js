import Head from "next/head"
import { useRouter } from "next/router";
import { Header } from "../components";
import {SearchResults } from "../components";
// import {API_KEY,CONTEXT_KEY } from "../keys";
import Response from "../Response";

export default function search({results}) {
    const router = useRouter();

    console.log(results);
  return (
    <div>
    <Head>
        <title>{`${router.query.term} -  Google Search`}</title>
    </Head>

    <Header />
    <SearchResults results={results} />

    </div>

  );
}

export async function getServerSideProps(context){
    
    const API_KEY = process.env.API_KEY ;
    const CONTEXT_KEY = process.env.CONTEXT_KEY;
    const isDummyData = false;
    const startIndex = context.query.start || "0";


    const data = isDummyData? Response :await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());

    return{
        props : {
            results: data,
        }
    }
}
