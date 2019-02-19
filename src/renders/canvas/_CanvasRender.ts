import Render from "../../Render";

export class _CanvasRender extends Render {
    private __element: HTMLCanvasElement;

    protected _context(): CanvasRenderingContext2D | null {
        return this.__element.getContext('2d');
    }

    constructor(element: HTMLCanvasElement) {
        super();

        this.__element = element;
    }

    public drawCircle(x: number, y: number, radius: number): void {
    }

    public drawEllipse(x: number, y: number, xRadius: number, yRadius: number): void {
        let context = this._context();
        if (context == null) {
            return;
        }

        context.ellipse(x, y, xRadius, yRadius, 0, 0, 2 * Math.PI);
    }

}