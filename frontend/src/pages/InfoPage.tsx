import Header from "../components/header/header";

const tecnologies = ['React.Js', 'Styled-Components', 'Node.js', 'Typescript', 'Exṕress.js']

export function InfoPage () {
    return (
        <>
            <Header />
            <div style={{ paddingLeft: '200px', paddingTop: '100px' }}>
                <h1>Developer Info</h1>
                <h3 style={{ paddingLeft: '10px', paddingTop: '20px' }}>
                    This app was developed by <a style={{ color: '#4156b5' }} target="_blank" href="https://www.linkedin.com/in/rodolfomno/">Rodolfo Marques</a>, using the following tecnologies;
                </h3>
                <ul style={{ paddingLeft: '50px', paddingTop: '20px' }}>
                    { tecnologies.map((item) => (
                        <li>
                            { item }
                        </li>
                    )) }
                </ul>
            </div>
        </>
    )
}