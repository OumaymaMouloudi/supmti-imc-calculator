import React, {useState} from 'react';

const ImcCard = (props) => {

    const [poids, setPoids] = useState(undefined);
    const [taille, setTaille] = useState(undefined);
    const [result, setResult] = useState(undefined);

    const onCalculate = () => {
        setResult((poids / (taille*taille)).toFixed(2) )
    }

    const reset = () => {
        setPoids('');
        setTaille('');
        setResult(undefined);
    }

    const renderResult = () => {
        return (result < 18.5 ? <span className='text-danger'>insuffisance pondérale </span> :
            result < 24.9 ? <span className='text-success'>poids normal</span> :
                result < 29.9 ? <span className='text-warning'>surpoids</span> :
                    <span className='text-danger'>obésité</span>);
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">
                    <h2>
                        Calcul d'IMC
                    </h2>
                </div>
            </div>

            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Poids (en Kg)</label>
                    <input type="text" className="form-control"
                           placeholder="Entrer le poid"
                           value={poids}
                           onChange={(e) => setPoids(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Taille (en m)</label>
                    <input type="text" className="form-control"
                           placeholder="Entrer la taille"
                           value={taille}
                           onChange={(e) => setTaille(e.target.value)}
                    />
                </div>

                <button className='btn btn-secondary mx-2' onClick={reset}>
                    Réinitialiser
                </button>

                <button className='btn btn-primary mx-2' onClick={onCalculate}>
                    Calculer
                </button>

                {result &&
                    <div className='card m-2'>
                        Le resultat est: {result}
                        {renderResult()}
                    </div>

                }
            </div>
        </div>
    );
}

export default ImcCard;