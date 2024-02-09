import {
  // Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
// import Api from "../../service/Api.js";
import { useState, useEffect } from "react";
import { callGet } from "service/api/Api.js";

const ListeAnnonce = () => {
const [annonces, setAnnonces] = useState([]);
const [error, setError] = useState(null);
const hashmapEtat = {};
  hashmapEtat['0'] = 'publiee';
  hashmapEtat['10'] = 'validee';
  hashmapEtat['20'] = 'vendue';
// const [annonceToUpdate, setAnnonceToUpdate] = useState({});


const fetchAnnonces = async() =>
{
  try {
    // const annonce_ws_response = await callGet('https://unnatural-coat-production.up.railway.app/annonces/etat/lessthan/10');
    const annonce_ws_response = await callGet('http://localhost:8080/annonces/current_user', true);
    // if (!annonce_ws_response.ok) {
    //   throw new Error('Bad HttpStatus');
    // }
    // const annonce_ws_result = annonce_ws_response;
    console.log("annonce_ws_response : ");
    console.log(annonce_ws_response);

    setAnnonces(annonce_ws_response);
    // console.log("annonces non validees : ");
    // console.log(annoncesNonValidees);

  } catch (error) {
    setError(error)
  }
};

useEffect(() => {
  fetchAnnonces();
}, []);


if (error) {
  return <p>{error.message}</p>
}

return (
  <>
    <Header />
    {/* Page content */}
    <Container className="mt--7" fluid>
      {/* Table */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Listes Annonces</h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              
              <thead className="thead-light">
                <tr>
                  <th scope="col">Voiture</th>
                  <th scope="col">Prix de vente</th>
                  <th scope="col">Date publication</th>
                  {/* <th scope="col">Annonceur</th> */}
                  {/* <th scope="col"></th> */}
                </tr>
              </thead>
              <tbody>
                { annonces && annonces.map((annonce) => (
                  <tr>
                    <th scope="row">
                      {annonce.voiture.modele.marque.nom + " " + annonce.voiture.modele.nom}
                    </th>
                    <td>{annonce.prix}</td>
                    <td>
                      {hashmapEtat[annonce.etat]}
                    </td>
                    {/* <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">{annonce.voiture.vendeur.nom}</span>
                        <div>
                          </div>
                      </div>
                    </td> */}
                    {/* <td>
                      <div className="text-center">
                        <Button className="my-4" color="primary" onClick={() => {validateAnnonce(annonce)}}>
                            Valider
                        </Button>
                      </div>
                    </td> */}
                  </tr>
                ))}
                  
              </tbody>
            </Table>
          </Card>
        </div>
      </Row>
    </Container>
  </>
);
};
export default ListeAnnonce;
