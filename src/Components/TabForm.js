import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import api from '../Services/api';
import Select from './Select';
import { getModels } from '../Store/actions/modelsAction'

function TabForm(props) {
  const dispatch = useDispatch();

  /* const { models, loading } = useSelector(state => ({
    models: state.modelsReducer.models,
    loading: state.modelsReducer.loading
  })) */

  let [makeID, setMakeId] = useState(0);
  let [modelID, setModelId] = useState(0);
  let [versionID, setVersionId] = useState(0);
  let [models, setModels] = useState([]);
  let [versions, setVersions] = useState([]);

  useEffect(() => {
    
    api.get(`/model?MakeID=${makeID}`)
      .then(res => setModels(res.data))
      .catch(err => console.log(err));
  }, [makeID]);

  useEffect(() => {
    api.get(`/version?ModelID=${modelID}`)
      .then(res => setVersions(res.data))
      .catch(err => console.log(err));
  }, [modelID]);

  const onChangeMake = (e) => {
    let makeID = e.target.value;
    setMakeId(makeID);
  }

  const onChangeModel = (e) => {
    let modelID = e.target.value;
    setModelId(modelID);
  }

  const onChangeVersion = (e) => {
    let versionID = e.target.value;
    setVersionId(versionID);
  }

  return (
    <form onSubmit={() => { }}>
      <div className="section-checks-situation">

        <label className="container-checkbox">
          <input type="checkbox" id="check-car" name="new" onChange={() => { }} />
          <span className="checkmark"></span>
          <label>Novos</label>
        </label>

        <label className="container-checkbox">
          <input type="checkbox" id="check-motorcycle" name="used" onChange={() => { }} />
          <span className="checkmark"></span>
          <label>Usados</label>
        </label>
      </div>

      <div className="container">
        <div className="section-inputs-form">

          <div className="row">
            <div className="inputs-row col col-12 col-md-6">
              <div className="section-input">
                <div className="div-label-input">
                  <img src="./location.png" className="img-location" alt="Icone localização" />
                  <label className="label-input">Onde:</label>
                </div>
                <input type="text" className="onde" />
              </div>

              <div className="section-select section-raio">
                <div className="div-label-select">
                  <label className="label-select">Raio:</label>
                </div>
                <select className="selects">
                  <option>100Km</option>
                  <option value="1">200Km</option>
                </select>
              </div>
            </div>

            <div className="inputs-row col col-sm-12 col-md-6">
              <Select
                sectionName="section-marca"
                label="Marca"
                className="marca"
                onChangeMake={e => onChangeMake(e)}
                firstOption="Todas"
                list={props.makes}
              />

              <Select
                sectionName="section-modelo"
                label="Modelo"
                className="modelo"
                onChangeMake={e => onChangeModel(e)}
                firstOption="Todos"
                list={models}
              />
            </div>
          </div>

          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="inputs-row">
                <div className="section-select section-ano">
                  <select className="selects ano" onChange={() => { }}>
                    <option value="">Ano Desejado</option>
                    <option value="">2018</option>
                    <option value="">2019</option>
                    <option value="">2020</option>
                  </select>
                </div>

                <div className="section-select section-faixa">
                  <select className="selects faixa" onChange={() => { }}>
                    <option value="">Faixa de Preço:</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col col-sm-12 col-md-6">
              <Select
                sectionName="section-versao"
                label="Versão"
                className="versao"
                onChangeMake={e => onChangeVersion(e)}
                firstOption="Todas"
                list={versions}
              />
            </div>

            <div className="col-12 footer-form">
              <a href="#" className="col-sm-12 col-md-6"> > Busca Avançada</a>

              <div className="col-sm-12 col-md-6 section-btns-footer">
                <button onClick={() => { }} className="btn-clear-filters">Limpar filtros</button>
                <button onClick={() => { }} className="btn-see-offers">VER OFERTAS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default TabForm;