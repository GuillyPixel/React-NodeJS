import styles from '../../assets/css/Home.module.css'
function Home(){
    return(

        <section className={styles.corpo_home} >
            <div className={styles.imagem_lado}>



            </div>
           
            <div className={styles.texto_lado}>
                <h1>Aqui você terá a viagem dos seus sonhos, Conheça agora</h1>
                <p>Uma agência de viagens é uma empresa especializada em planejar e organizar viagens, oferecendo
                uma variedade de serviços para facilitar o processo para os clientes. Elas ajudam
                na escolha de destinos, reservas de passagens aéreas, hospedagem, passeios turísticos e até seguro de viagem.
                Além disso, as agências possuem conhecimento sobre os destinos, oferecendo orientações personalizadas e dicas práticas.</p>
            </div>
        </section>
    )


}
export default Home