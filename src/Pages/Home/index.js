import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import TabForm from '../../Components/TabForm';
import { getMakes } from '../../Store/actions/makesAction'

function Home() {
  const dispatch = useDispatch();

  const { makes, loading } = useSelector(state => ({
    makes: state.makesReducer.makes,
    loading: state.makesReducer.loading
  }))

  useEffect(() => {
    dispatch(getMakes())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLoadContent = (e, tabName) => {
    let i, tabcontent;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
  }

  const onOpenTab = (e, tabName) => {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
  }

  if (loading)
    return <h5>Carregando...</h5>;

  return (
    <div className="home-container">
      <div className="logo">
        <img src="./webmotors.svg" alt="Logo" />
      </div>

      <button onClick={() => { }} className="btn-sell-car">Vender meu carro</button>

      <section className="section-filter-vehicle">

        <div className="tab">
          <button className="tablinks active" onClick={(e) => onOpenTab(e, 'Carros')}>
            <span className="buy">COMPRAR</span> <br />
            <span className="car">CARROS</span>
          </button>
          <button className="tablinks" onClick={(e) => onOpenTab(e, 'Motos')}>
            <span className="buy">COMPRAR</span> <br />
            <span className="car">MOTOS</span>
          </button>
        </div>

        <div id="Carros" className="tabcontent" onLoad={(e) => onLoadContent(e, 'Carros')}>
          <TabForm makes={makes} />
        </div>

        <div id="Motos" className="tabcontent">
          <TabForm makes={makes} />
        </div>
      </section>
    </div>
  )

}

export default Home;
