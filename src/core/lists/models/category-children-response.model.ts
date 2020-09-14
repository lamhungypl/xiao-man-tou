export interface CategoryChildrenResponse {
  categoryId: string;
  image: string;
  imagePath: string;
  isActive: string;
  metaTagDescription: string;
  metaTagKeyword: string;
  metaTagTitle: string;
  name: string;
  parentInt: string;
  sortOrder: string;
  children: CategoryChildrenResponse;
}
