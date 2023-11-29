import { Experiment } from '../model/experiments';

export class RepoExperiments {
  url = 'http://localhost:2700/experiments';

  async getExperiment(): Promise<Experiment[]> {
    const response = await fetch(this.url);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createExperiment(
    newExperiment: Partial<Experiment>
  ): Promise<Experiment> {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(newExperiment),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateExperiment(
    id: Experiment['id'],
    updatedExperiment: Partial<Experiment>
  ): Promise<Experiment> {
    const finalUrl = `${this.url}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedExperiment),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteExperiment(id: Experiment['id']): Promise<Experiment[]> {
    const finalUrl = `${this.url}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
