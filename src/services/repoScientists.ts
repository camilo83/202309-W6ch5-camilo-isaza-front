import { Scientist } from '../model/scientist';

export class RepoScientists {
  url = 'http://localhost:2700/scientists';

  async getScientists(): Promise<Scientist[]> {
    const response = await fetch(this.url);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createScientist(newScientist: Partial<Scientist>): Promise<Scientist> {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(newScientist),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateScientist(
    id: Scientist['id'],
    updatedScientist: Partial<Scientist>
  ): Promise<Scientist> {
    const finalUrl = `${this.url}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedScientist),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteScientist(id: Scientist['id']): Promise<Scientist[]> {
    const finalUrl = `${this.url}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
