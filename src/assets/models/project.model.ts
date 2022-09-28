export class project{
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    github: string;
    technologies: string[];

constructor(id: number, name: string, description: string, image: string, link: string, github: string, technologies: string[]){
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.link = link;
    this.github = github;
    this.technologies = technologies;
}


public getId() {
    return this.id;
}

	public setId(id: number) {
    this.id = id;
}

	public getName() {
    return this.name;
}

	public setName(name: string) {
    this.name = name;
}

	public getDescription() {
    return this.description;
}

	public setdescription(description: string) {
    this.description = description;
}

	public getImage() {
    return this.image;
}

	public setImage(image: string) {
    this.image = image;
}

	public getLink() {
    return this.link;
}

	public setLink(link: string) {
    this.link = link;
}

	public getGithub() {
    return this.github;
}

	public setGithub(github: string) {
    this.github = github;
}

	public getTechnologies(): string[] {
    return this.technologies;
}

	public setTechnologies(technologies: string[]) {
    this.technologies = technologies;
}


}