import type { NextPage } from 'next';
import NextLink from 'next/link'
import Head from 'next/head';
import Form from './styles'

const FormPage: NextPage = () => {
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <Form>
            <Head>
                <title>Avaliar | Filmes e séries G81</title>
                <meta
                    name="description"
                    content="Avalie as séries indicadas."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="dsmovie-form-container">
                <img className="dsmovie-movie-card-image" src="https://files.tecnoblog.net/wp-content/uploads/2020/01/the-witcher-netflix.jpg" alt="The Witcher" />
                <div className="dsmovie-card-bottom-container">
                    <h3>"The Witcher"</h3>
                    <form className="dsmovie-form">
                        <div className="form-group dsmovie-form-group">
                            <label htmlFor="email">Informe seu email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group dsmovie-form-group">
                            <label htmlFor="score">Informe sua avaliação</label>
                            <select className="form-control" id="score">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="dsmovie-form-btn-container">
                            <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                        </div>
                    </form >
                    <NextLink href="/">
                        <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                    </NextLink>
                </div >
            </div >

        </Form>
  )
}

export default FormPage;
