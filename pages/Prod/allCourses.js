export class AllCourses {
    constructor(page) {
        this.page = page;
        this.dropDownCategory = page.locator('#combo-box-demo');
        
    }

   async clickCategoryField() {
        const categoryInput = await this.dropDownCategory;
        await categoryInput.click();
        return categoryInput;
    }


} 