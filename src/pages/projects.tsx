import { GetServerSideProps, GetStaticProps } from "next"

export default function Projects({ aaa }: any) {
  console.log(aaa)
  return (
    <h1>Hello Worldd </h1>
  )

}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/Leonardo334/repos')
  const data = await response.json()

  return {
    props: {
      aaa: data
    },
    //revalidate: 1000 // 1 second
  }
}