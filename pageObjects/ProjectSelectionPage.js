const ProjectSelectionLocator = require('../locators/ProjectSelectionLocator');

class ProjectSelectionPage {
    constructor(page) {
        this.page = page;
        this.projectSearch = ProjectSelectionLocator.projectSearch(page);
        this.projectResult = ProjectSelectionLocator.projectResult(page);
    }

    async selectProject(projectName) {
        await this.projectSearch.fill(projectName);
        await this.projectSearch.press('Enter');
        await this.page.waitForTimeout(3000);
        await this.projectResult(projectName).click();
    }
}

module.exports = ProjectSelectionPage;