## messagesテーブル

|Column   |Type    |Options                        |
|---------|--------|-------------------------------|
|body     |text    |                               |
|image    |string  |                               |
|group_id |integer |null: false, foreign_key: true |
|user_id  |integer |null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user

*********************************************************************

## groupsテーブル

|Column     |Type    |Options                        |
|-----------|--------|-------------------------------|
|name       |string  |null: false, add_index         |

### Association
- has_many :messages
- has_many :group_users
- has_many :users, through: :groups_users

*********************************************************************

## usersテーブル

|Column     |Type    |Options                        |
|-----------|--------|-------------------------------|
|name       |string  |null: false, unique: true      |
|email      |string  |null: false, unique: true      |
|password   |string  |null: false,                   |


### Association
- has_many :messages
- has_many :group_users
- has_many :groups, through: :groups_users

*********************************************************************

## group_userテーブル

|Column   |Type    |Options                        |
|---------|--------|-------------------------------|
|user_id  |integer |null: false, foreign_key: true |
|group_id |integer |null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user

*********************************************************************