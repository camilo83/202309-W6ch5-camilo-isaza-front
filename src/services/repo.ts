import { Element } from '../model/element';

export class Repo {
  url = 'http://localhost:2700/elements';

  async getElements(): Promise<Element[]> {
    const response = await fetch(this.url);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createElement(newElement: Partial<Element>): Promise<Element> {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(newElement),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateElement(
    id: Element['id'],
    updatedElement: Partial<Element>
  ): Promise<Element> {
    const finalUrl = `${this.url}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedElement),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteElement(id: Element['id']): Promise<Element[]> {
    const finalUrl = `${this.url}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
