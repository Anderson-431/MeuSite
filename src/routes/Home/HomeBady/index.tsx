import { Link } from "react-router-dom";
import Button from "../../../components/Header/Button";
import Card from "../../../components/Header/Card";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt30 mb30">
            <Card title="Página inicial" />
          </div>
          <div className="dflex">
            <Link to="/promotion">
              <Button text="Ver promoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
