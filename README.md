## messagesテーブル

|Column   |Type    |Options                        |
|---------|--------|-------------------------------|
|body     |text    |null: false,                   |
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
|message_id |integer |null: false, foreign_key: true |
|user_id    |integer |null: false, foreign_key: true |

### Association
- has_many :messages
- has_many :users

*********************************************************************

## usersテーブル

|Column     |Type    |Options                        |
|-----------|--------|-------------------------------|
|name       |string  |null: false, unique: true      |
|email      |string  |null: false, unique: true      |
|password   |string  |null: false,                   |
|message_id |integer |null: false, foreign_key: true |
|group_id   |integer |null: false, foreign_key: true |


### Association
- has_many :messages
- has_many :groups

*********************************************************************

## groups_usersテーブル

|Column   |Type    |Options                        |
|---------|--------|-------------------------------|
|user_id  |integer |null: false, foreign_key: true |
|group_id |integer |null: false, foreign_key: true |

### Association
- belongs_to :group
- belongs_to :user

*********************************************************************