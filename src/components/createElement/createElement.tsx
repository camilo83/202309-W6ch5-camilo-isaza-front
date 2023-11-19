import { /* SyntheticEvent, */ useRef } from 'react';
/* import { useElements } from '../../hooks/useElements';
import { Element } from '../../model/element'; */

export function CreateElement() {
  /*   const { addElement } = useElements(); */

  const formRef = useRef<HTMLFormElement>(null);

  /*   const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
 */
  /*   const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const elementName = formData.get('name') as string;
    const elementSymbol = formData.get('symbol') as string;
    const elementAtomicMass = parseFloat(formData.get('atomic_mass') as string);
    const elementPhase = formData.get('phase') as string;
    const elementDiscoveredBy = formData.get('discovered_by') as string;
    const elementElectronConfig = formData.get(
      'electron_configuration'
    ) as string;
    const elementPeriod = parseInt(formData.get('period') as string);
    const elementImage = formData.get('image_url') as string;
    const elementModel = formData.get('model_url') as string;
    const elementId = parseFloat(formData.get('periodic-number') as string);
    const newElement: Partial<Element> = {
      id: isNaN(elementId) ? 0 : elementId,
      symbol: elementSymbol,
      atomic_mass: elementAtomicMass,
      phase: elementPhase,
      discovered_by: elementDiscoveredBy,
      electron_configuration: elementElectronConfig,
      period: elementPeriod,
      image: {
        title: elementName,
        url: elementImage,
        attribution: '',
      },
      bohr_model_image: elementModel,
      bohr_model_3d: elementModel,
    };

    addElement(newElement);
    form.reset();
  }; */

  return (
    <>
      <section className="add-element">
        <div>
          <h2>Create element</h2>
        </div>

        <div className="element-form">
          <form
            ref={formRef}
            action=""
            name="form" /* onSubmit={handleSubmit} */
          >
            <div>
              <label htmlFor="element-name">Name</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label htmlFor="element-symbol">Symbol</label>
              <input type="text" name="symbol" required />
            </div>
            <div>
              <label htmlFor="element-periodic-number">Periodic Number: </label>
              <input type="number" name="periodic-number" required />
            </div>
            <div>
              <label htmlFor="element-phase">Phase: </label>
              <input type="text" name="phase" required />
            </div>
            <div>
              <label htmlFor="element-atomic-mass">Atomic Mass: </label>
              <input type="number" name="atomic-mass" required />
            </div>
            <div>
              <label htmlFor="element-discovered-by">Discovered By: </label>
              <input type="text" name="discovered-by" required />
            </div>
            <div>
              <label htmlFor="element-electron-config">Electron Config: </label>
              <input type="number" name="electron-config" required />
            </div>
            <div>
              <label htmlFor="element-period">Period: </label>
              <input type="number" name="period" required />
            </div>
            <div>
              <label htmlFor="element-image">Image: </label>
              <input
                type="text"
                name="image"
                placeholder="Insert an image-URL"
                required
              />
            </div>
            <div>
              <label htmlFor="element-model">Model: </label>
              <input
                type="text"
                name="model"
                placeholder="Insert an model-URL"
                required
              />
            </div>
            <div>
              <button type="submit">Añadir</button>
              <button>Cancelar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
