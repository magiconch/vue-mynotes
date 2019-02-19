import Render from "../../Render";

export class _SvgRender extends Render {
    private static readonly __svgNS: string = 'http://www.w3.org/2000/svg';
    private static readonly __xlinkNS: string = 'http://www.w3.org/1999/xlink';
    private static readonly __precision: number = 3;

    private __element: SVGSVGElement;
    private __container: SVGElement;

    constructor(element: SVGSVGElement) {
        super();

        this.__element = element;
        this.__container = this.__element;
    }

    public drawCircle(x: number, y: number, radius: number): void {

    }

    public drawEllipse(x: number, y: number, xRadius: number, yRadius: number): void {
        let svgEllipseElement: SVGEllipseElement = this._createSVGElement('ellipse') as SVGEllipseElement;
        svgEllipseElement.setAttribute('cx', this._toFixed(x));
        svgEllipseElement.setAttribute('cy', this._toFixed(y));
        svgEllipseElement.setAttribute('rx', this._toFixed(xRadius));
        svgEllipseElement.setAttribute('ry', this._toFixed(yRadius));

        this.__container.appendChild(svgEllipseElement);
    }

    protected _createSVGElement(qualifiedName: string): SVGElement {
        return document.createElementNS('http://www.w3.org/2000/svg', qualifiedName);
    }

    protected _toFixed(value: number): string {
        return value.toFixed(3);
    }

}