export class AbstractEntity {
  id: bigint;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  createdBy: Date;
  updatedBy: Date | null;
  deletedBy: Date | null;
}
