import { Link, useParams } from 'react-router-dom';
import './detailsPage.scss';
import { Element } from '../../model/element';
import { useElements } from '../../hooks/useElements';

export default function DetailsPage() {
  const { id } = useParams();
  const { elements, deleteElement } = useElements();
  const element = elements.find((item: Element) => item.id === String(id));

  const handleDelete = () => {
    if (element?.id) {
      deleteElement(element.id);
    }
  };

  return (
    <>
      <div className="details">
        <div className="images">
          <img src={element?.bohr_model_image} alt="" />
        </div>
        <div className="info">
          <p>
            <h3 className="element-property">{element?.name}</h3>
          </p>
          <p>
            Periodic Number:{' '}
            <span className="element-property">{element?.id}</span>
          </p>
          <p>
            Phase: <span className="element-property">{element?.phase}</span>
          </p>
          <p>
            Atomic Mass:{' '}
            <span className="element-property">{element?.atomic_mass}</span>
          </p>
          <p>
            Discovered by:{' '}
            <span className="element-property">{element?.discovered_by}</span>
          </p>
          <p>
            Electro config:{' '}
            <span className="element-property">
              {element?.electron_configuration}
            </span>
          </p>
          <p>
            Period: <span className="element-property">{element?.period}</span>
          </p>
        </div>
        <div className="images">
          <img src={element?.image.url} alt="" />
        </div>
      </div>
      <div className="change-element">
        <Link
          to={`/details/${Number(element?.id) - 1}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="previous-next-element">Previous Element</div>
        </Link>
        <div className="edit-delete"> Edit</div>
        <div className="edit-delete" onClick={handleDelete}>
          Delete
        </div>
        <Link
          to={`/details/${Number(element?.id) + 1}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="previous-next-element">Next Element</div>
        </Link>
      </div>
    </>
  );
}
