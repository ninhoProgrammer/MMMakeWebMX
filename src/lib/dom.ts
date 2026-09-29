export function $(selector: string, context: Document | HTMLElement = document): HTMLElement | null {
    return context.querySelector(selector);
}

export function $$(selector: string, context: Document | HTMLElement = document): NodeListOf<HTMLElement> {
    return context.querySelectorAll(selector);
}