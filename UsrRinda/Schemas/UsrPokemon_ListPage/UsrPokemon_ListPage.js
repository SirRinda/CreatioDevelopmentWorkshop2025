define("UsrPokemon_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrPokemon"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrPokemon"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"sticky": true,
							"width": 108
						},
						{
							"id": "5137206f-6612-dd08-857a-1e15d9602904",
							"code": "PDS_UsrTrainer",
							"caption": "#ResourceString(PDS_UsrTrainer)#",
							"dataValueType": 10,
							"width": 144
						},
						{
							"id": "2c7b1c45-e4bf-6aa5-12d1-d3b1ff33cf16",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 32,
							"width": 131
						},
						{
							"id": "6dfec74b-0368-f1c2-20de-7f8b637d7bfa",
							"code": "PDS_UsrBattleType",
							"caption": "#ResourceString(PDS_UsrBattleType)#",
							"dataValueType": 10,
							"width": 133
						},
						{
							"id": "134a1527-edcb-ddb9-d3c4-5f2c52f8eb8c",
							"code": "PDS_UsrStatus",
							"caption": "#ResourceString(PDS_UsrStatus)#",
							"dataValueType": 10,
							"width": 102
						},
						{
							"id": "1891ab11-10a7-576b-3211-aba283b2503b",
							"code": "PDS_UsrHeight",
							"caption": "#ResourceString(PDS_UsrHeight)#",
							"dataValueType": 31,
							"width": 128
						},
						{
							"id": "36039507-51fa-a74a-daf5-649457381354",
							"code": "PDS_UsrWeight",
							"caption": "#ResourceString(PDS_UsrWeight)#",
							"dataValueType": 31,
							"width": 135
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrPokemon",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrTrainer": {
						"modelConfig": {
							"path": "PDS.UsrTrainer"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrBattleType": {
						"modelConfig": {
							"path": "PDS.UsrBattleType"
						}
					},
					"PDS_UsrStatus": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrHeight": {
						"modelConfig": {
							"path": "PDS.UsrHeight"
						}
					},
					"PDS_UsrWeight": {
						"modelConfig": {
							"path": "PDS.UsrWeight"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrPokemon",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrTrainer": {
							"path": "UsrTrainer"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						},
						"UsrBattleType": {
							"path": "UsrBattleType"
						},
						"UsrStatus": {
							"path": "UsrStatus"
						},
						"UsrHeight": {
							"path": "UsrHeight"
						},
						"UsrWeight": {
							"path": "UsrWeight"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});