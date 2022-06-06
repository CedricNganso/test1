import ProductConfAccordion from "./ProductConfAccordion";
import ButtonContent from "./ProductConfAccordion/ButtonContent";
import Values from "./Values";
import "./styles.css";

const items = [
  {
    name: "Farbe",
    type: "enum",
    values: [
      {
        imageUrl: null,
        name: "Rot",
        positionValue: "20"
      },
      {
        imageUrl: null,
        name: "Silber",
        positionValue: "21"
      }
    ],
    position: 2,
    multiVariantAllowed: false
  },
  {
    name: "Materialen",
    type: "enum",
    values: [
      {
        imageUrl: null,
        name: "Glas",
        positionValue: "10"
      },
      {
        imageUrl: null,
        name: "Holz",
        positionValue: "11"
      }
    ],
    position: 1,
    multiVariantAllowed: true
  },
  {
    name: "Formen",
    type: "enum",
    values: [
      {
        imageUrl: null,
        name: "Rund",
        positionValue: "30"
      },
      {
        imageUrl: null,
        name: "Quadratisch",
        positionValue: "31"
      }
    ],
    position: 3,
    multiVariantAllowed: true
  },
  {
    name: "Geschlecht",
    type: "enum",
    values: [
      {
        imageUrl: null,
        name: "Mann",
        positionValue: "30"
      },
      {
        imageUrl: null,
        name: "Frau",
        positionValue: "31"
      }
    ],
    position: 3,
    multiVariantAllowed: true
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <br />
      <br />

      <ProductConfAccordion initial={0} maxItems={items.length}>
        {items.map(({ name, values }, index) => (
          <ProductConfAccordion.Item key={index}>
            <ProductConfAccordion.Button id={index}>
              {index}. {name}
            </ProductConfAccordion.Button>
            <ProductConfAccordion.Body id={index}>
              <Values values={values} index={index} />
            </ProductConfAccordion.Body>
          </ProductConfAccordion.Item>
        ))}
      </ProductConfAccordion>
    </div>
  );
}
