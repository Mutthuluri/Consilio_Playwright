const ProjectSelectionLocator = {
    projectSearch: (page) => page.getByRole('textbox', { name: 'Search' }),
    projectResult: (page, projectName) => page.getByText(projectName, { exact: true }),
};

module.exports = ProjectSelectionLocator;