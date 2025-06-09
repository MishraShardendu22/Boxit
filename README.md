# Droply Database Schema

This schema defines the core structure of the `files` table for Droply, a file and folder management platform.

## Tech Stack

- **ORM:** Drizzle ORM
- **Database:** PostgreSQL (e.g., via Neon)

## Table: `files`

Stores both files and folders.

### Fields

| Name           | Type      | Description                             |
|----------------|-----------|-----------------------------------------|
| `id`           | UUID      | Primary key                             |
| `name`         | Text      | Name of file/folder                     |
| `path`         | Text      | Full path                               |
| `size`         | Integer   | Size in bytes (0 for folders)           |
| `type`         | Text      | MIME type or `"folder"`                 |
| `fileUrl`      | Text      | Public URL                              |
| `thumbnailUrl` | Text      | Optional thumbnail                      |
| `userId`       | Text      | Owner ID                                |
| `parentId`     | UUID      | Reference to parent folder              |
| `isFolder`     | Boolean   | Whether it's a folder                   |
| `isStarred`    | Boolean   | Marked as favorite                      |
| `isTrash`      | Boolean   | Moved to trash                          |
| `createdAt`    | Timestamp | Created time                            |
| `updatedAt`    | Timestamp | Last updated                            |

### Relationships

- `parent`: One-to-one self-reference to a parent folder
- `children`: One-to-many self-reference for child files/folders

### Types

- `File`: Type for select queries
- `NewFile`: Type for inserts
