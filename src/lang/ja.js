module.exports = {
	'comm_push_settings1': 'プッシュ設定ファイルは${1}に生成されました\n',
	'comm_push_settings2': '注：コメントはプッシュ設定ファイルでサポートされています\n',
	'comm_add_service_config': 'ここにサービス設定を追加...',
	'comm_settings_imported': '${1}からインポートされた設定\n',
	'no_locale': 'ロケール "${1}"は存在しません。 .jsファイルが作成されていますか？',
	'upload_queue_disabled': 'アップロードキューが無効です - ワークスペースの設定を確認してください。',
	'upload_queue_cleared': 'アップロードキューがクリアされました',
	'select_workspace_root': 'ワークスペースのルートディレクトリを選択します。',
	'running_tasks_in_queue': 'キューで${1}つのタスクを実行中...',
	'processing': '処理(${1}/${2})',
	'processing_with_state': '処理${1}(${2}/${3})',
	'queue_empty': 'キューは空です。',
	'queue_running': 'キューは操作可能です。',
	'stopping_queue': 'キューを停止しています...',
	'queue_complete': 'キューが完了しました。',
	'queue_items_fail': '${1}p{1:項目:件}が失敗しました。',
	'queue_items_skip': '${1} p{1:項目:件}合格者。',
	'queue_items_success': '${1}p{1:項目:件}${2}。',
	'cancel': 'キャンセル',
	'enter_service_settings_filename': 'サービス設定ファイルのファイル名を入力します。',
	'empty': '空の',
	'empty_template': '空のテンプレート',
	'select_service_type_template': 'サービスタイプテンプレートを選択します。',
	'filename_exists': 'ファイル"${1}"は既に存在します。',
	'filename_exists_ignore_times': 'ファイル"${1}"はすでに存在します。',
	'filename_exists_mismatch': 'ファイル"${1}"はすでに存在し、異なるタイプです。',
	'skip': 'パス',
	'stop': 'やめる',
	'skip_uploading_default': 'ファイルのアップロードを渡す（デフォルト）',
	'stop_transfer_empty_queue': '転送を停止し、現在のキューを空にする',
	'overwrite': '上書き',
	'replace_target_with_source': 'ターゲットファイルをソースファイルに置き換えます。',
	'rename': '名前を変更する',
	'keep_both_files_by_rename': 'ソースファイルの名前を変更して両方のファイルを保持する',
	'skip_all': 'すべてを渡す',
	'skip_uploading_all_existing': '既存のファイルをすべてアップロードする',
	'overwrite_all': 'すべてを上書きする',
	'replace_all_existing': '既存のファイルをすべて置換する',
	'rename_all': 'すべての名前を変更する',
	'keep_all_existing_by_renaming_uploaded': 'アップロードされたファイルの名前を変更して既存のファイルをすべて保持する',
	'transfer_cancelled': '転送がキャンセルされた',
	'no_service_file': 'プロジェクト内で設定ファイルが見つかりませんでした。 "${1}"という名前のファイルを作成しましたか？',
	'service_not_defined': '転送ファイルが設定ファイル内で "${1}"に定義されていませんでした。',
	'multiple_service_files_no_transfer': '選択したディレクトリ内に複数のサービス設定ファイルが見つかりました。 転送が完了できませんでした。',
	'service_setting_missing': 'タイプ${1}のサービス設定ファイルに必要な設定がありません：${2}',
	'cannot_action_ignored_file': 'ファイルを${1}できません${2} - 定義されたignoreGlobsフィルターの1つと一致します。',
	'no_import_file': '設定ファイルが指定されていません。 このコマンドは、設定ファイルまたはエクスプローラのコンテキストメニューから実行してください。',
	'import_file_not_supported': '構成ファイル形式はサポートされていません。 現在、Sublime SFTP形式のみがサポートされています。',
	'settings_file_exists': 'この場所には設定ファイルが既に存在します。 上書きしますか？',
	'requesting_password': 'パスワードを要求しています（このプロンプトを避けるために、パスワードはサービス設定ファイルに保存できます）。',
	'added_watch_for': '${1}の時計を追加しました',
	'removed_watch_for': '${1}の時計を削除しました',
	'cleared_all_watchers': 'すべてのウォッチャーをクリアしました。',
	'watched_paths': '監視対象パス：',
	'path_with_trigger_count': '${1}（${2}回p{2:発砲:点火}）',
	'no_paths_watched': 'パスは監視されませんでした。',
	'directory_out_of_root_no_create': 'ディレクトリ "${1}"はルートパスに含まれていないため作成できません。',
	'directory_not_created_remote_mismatch': 'ディレクトリ${1}を作成できませんでした（同じ名前のファイルがリモートに存在します）。',
	'file_class_description': 'ローカル/ネットワークファイル転送',
	'remote_file_not_found': 'リモートファイル${1}は存在しません。',
	'sftp_class_description': 'SFTP / SSHファイル転送',
	'sftp_could_not_connect_server': 'サーバーホスト${1}:${2}に接続できませんでした',
	'sftp_client_connected': 'ホスト${1}:${2}に接続されたSFTPクライアント',
	'sftp_missing_root': 'SFTPがルートパスを見つけられない、またはアクセスできませんでした。 "${1}"設定ファイルを確認してください。',
	'sftp_disconnected': 'ホスト${1}:${2}から切断されたSFTPクライアント',
	'sftp_enter_ssh_pass': 'SSHパスワードを入力してください（保存されません）',
	'stopping': '停止しています...',
	'queue_force_stopped': 'キュー${1}p{2:タスクフォ:のタスクフォ}ースが${2}秒後に停止しました',
	'queue_cancelled': 'キュー${1}がキャンセルされました',
	'num_to_upload': 'p{1::アップロードする}${1}p{1:アイテムをアップロードする:項目}',
	'upload_queue_disabled': 'アップロードキューが無効です - ワークスペースの設定を確認してください。',
	'items_queued_for_upload': 'アップロード待ちのアイテム：',
	'no_current_upload_queue': '現在のアップロードキューアイテムはありません',
	'key_file_not_found': '秘密鍵ファイル "${1}"が見つかりませんでした。 この場所には存在しますか？ 覚えておいてください - "~"のようなシェルパスショートカットは使用できません。',
	'key_file_not_working': '"${1}"の秘密鍵ファイルは、ユーザー${2}を認証しませんでした。 これが正しいキーファイルで、アクセス権が与えられていますか？'
};
