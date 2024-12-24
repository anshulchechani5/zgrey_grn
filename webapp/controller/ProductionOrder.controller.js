sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("zproductionorder.controller.ProductionOrder", {
            onInit: function () {
                var oDate = new Date();
                var oModel = {
                    dDefaultDate: oDate.getFullYear() + '-' + Number(oDate.getMonth() + 1) + '-' + oDate.getDate()
                };
                this.getView().setModel(new JSONModel(oModel), "oDateModel")
                var oModel = {
                    oplant: "1300"
                };
                this.getView().setModel(new JSONModel(oModel), "plant")
                this.getView().setModel(new sap.ui.model.json.JSONModel(), "oFirstTableDataModel");
                this.getView().getModel("oFirstTableDataModel").setProperty("/aFirstTableData", []);
                this.getView().setModel(new sap.ui.model.json.JSONModel(), "oFirstTableDataModel1");
                this.getView().getModel("oFirstTableDataModel1").setProperty("/aFirstTableData1", []);
                // this.NewRowEnterFunctionForFirstTable();
                // this.NewRowEnterFunctionForSecondTable();
                // this.table();
                var slection = {
                    visible: true,

                }
                this.getOwnerComponent().setModel(new sap.ui.model.json.JSONModel(slection), "oCommonModel");
                this.getView().setModel(new sap.ui.model.json.JSONModel(), "oBatchData")
                this.getView().getModel("oBatchData").setProperty("/aData", [])
                var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZPP_GREY_COMPONENT_BIN");
                // oModel.read("/GREY_GRN", {
                //     urlParameters: { "$top": "5000000" },
                //     success: function (oresponse) {
                //         this.getView().getModel("oBatchData").setProperty("/aData", oresponse.results)
                //     }.bind(this)
                // })
                var that = this;

                oModel.read("/GREY_GRN", {
                    urlParameters: {
                      "$top": "0",
                      "$inlinecount": "allpages"
                    },
                    success: function (data) {
                      var totalCount = Number(data.__count);
                      if (totalCount > 5000) {
                        var totalCount = Number(data.__count);
                        var aBlankArr = [];
                        var skip = 0;
                        readData(skip);
                        let combinedArray = [];
                        function readData(skip) {
                          oModel.read("/GREY_GRN", {
                            urlParameters: {
                              "$top": "5000",
                              "$skip": skip
                            },
                            success: function (respo) {
                              if (skip < totalCount) {
                                aBlankArr.push(respo.results)
                                readData(skip + 5000);
                              }
                              else {
                                aBlankArr.forEach(subArray => {
                                  combinedArray = combinedArray.concat(subArray);
                                });
                                that.getView().getModel("oBatchData").setProperty("/aData", combinedArray)
                              }
                            }
                          })
                        }
                      }
                      else {
                        oModel.read("/GREY_GRN", {
                          urlParameters: { "$top": "5000" },
                          success: function (oresponse) {
                            this.getView().getModel("oBatchData").setProperty("/aData", oresponse.results)
                          }.bind(this),
                        })
                      }
                    }.bind(this)
                  })

                  var that = this;

                this.getView().setModel(new sap.ui.model.json.JSONModel(), "oBatchData1")
                this.getView().getModel("oBatchData1").setProperty("/aData1", [])
                var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZPP_GREY_COMPONENT_BIN");
                // oModel.read("/CheckPiece", {
                //     urlParameters: { "$top": "5000000" },
                //     success: function (oresponse) {
                //         this.getView().getModel("oBatchData1").setProperty("/aData1", oresponse.results)
                //     }.bind(this)
                // })
                var that = this;

                oModel.read("/CheckPiece", {
                    urlParameters: {
                      "$top": "0",
                      "$inlinecount": "allpages"
                    },
                    success: function (data) {
                      var totalCount = Number(data.__count);
                      if (totalCount > 5000) {
                        var totalCount = Number(data.__count);
                        var aBlankArr = [];
                        var skip = 0;
                        readData(skip);
                        let combinedArray = [];
                        function readData(skip) {
                          oModel.read("/CheckPiece", {
                            urlParameters: {
                              "$top": "5000",
                              "$skip": skip
                            },
                            success: function (respo) {
                              if (skip < totalCount) {
                                aBlankArr.push(respo.results)
                                readData(skip + 5000);
                              }
                              else {
                                aBlankArr.forEach(subArray => {
                                  combinedArray = combinedArray.concat(subArray);
                                });
                                that.getView().getModel("oBatchData1").setProperty("/aData1", combinedArray)
                              }
                            }
                          })
                        }
                      }
                      else {
                        oModel.read("/CheckPiece", {
                          urlParameters: { "$top": "5000" },
                          success: function (oresponse) {
                            this.getView().getModel("oBatchData1").setProperty("/aData1", oresponse.results)
                          }.bind(this),
                        })
                      }
                    }.bind(this)
                  })



                this.getView().setModel(new sap.ui.model.json.JSONModel(), "oBatchData2")
                this.getView().getModel("oBatchData2").setProperty("/aData2", [])
                var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZPP_GREY_COMPONENT_BIN");
                // oModel.read("/Selvedge", {
                //     urlParameters: { "$top": "5000000" },
                //     success: function (oresponse) {
                //         this.getView().getModel("oBatchData2").setProperty("/aData2", oresponse.results)
                //     }.bind(this)
                // })

                var that = this;

                oModel.read("/Selvedge", {
                    urlParameters: {
                      "$top": "0",
                      "$inlinecount": "allpages"
                    },
                    success: function (data) {
                      var totalCount = Number(data.__count);
                      if (totalCount > 5000) {
                        var totalCount = Number(data.__count);
                        var aBlankArr = [];
                        var skip = 0;
                        readData(skip);
                        let combinedArray = [];
                        function readData(skip) {
                          oModel.read("/Selvedge", {
                            urlParameters: {
                              "$top": "5000",
                              "$skip": skip
                            },
                            success: function (respo) {
                              if (skip < totalCount) {
                                aBlankArr.push(respo.results)
                                readData(skip + 5000);
                              }
                              else {
                                aBlankArr.forEach(subArray => {
                                  combinedArray = combinedArray.concat(subArray);
                                });
                                that.getView().getModel("oBatchData2").setProperty("/aData2", combinedArray)
                              }
                            }
                          })
                        }
                      }
                      else {
                        oModel.read("/Selvedge", {
                          urlParameters: { "$top": "5000" },
                          success: function (oresponse) {
                            this.getView().getModel("oBatchData2").setProperty("/aData2", oresponse.results)
                          }.bind(this),
                        })
                      }
                    }.bind(this)
                  })

                this.getView().setModel(new sap.ui.model.json.JSONModel(), "oBatchData3")
                this.getView().getModel("oBatchData3").setProperty("/aData3", [])
                var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZPP_GREY_COMPONENT_BIN");
                // oModel.read("/BeamProgram", {
                //     urlParameters: { "$top": "5000000" },
                //     success: function (oresponse) {
                //         this.getView().getModel("oBatchData3").setProperty("/aData3", oresponse.results)
                //     }.bind(this)
                // })
                var that = this;

                oModel.read("/BeamProgram", {
                    urlParameters: {
                      "$top": "0",
                      "$inlinecount": "allpages"
                    },
                    success: function (data) {
                      var totalCount = Number(data.__count);
                      if (totalCount > 5000) {
                        var totalCount = Number(data.__count);
                        var aBlankArr = [];
                        var skip = 0;
                        readData(skip);
                        let combinedArray = [];
                        function readData(skip) {
                          oModel.read("/BeamProgram", {
                            urlParameters: {
                              "$top": "5000",
                              "$skip": skip
                            },
                            success: function (respo) {
                              if (skip < totalCount) {
                                aBlankArr.push(respo.results)
                                readData(skip + 5000);
                              }
                              else {
                                aBlankArr.forEach(subArray => {
                                  combinedArray = combinedArray.concat(subArray);
                                });
                                that.getView().getModel("oBatchData3").setProperty("/aData3", combinedArray)
                                
                              }
                            }
                          })
                        }
                      }
                      else {
                        oModel.read("/BeamProgram", {
                          urlParameters: { "$top": "5000" },
                          success: function (oresponse) {
                            this.getView().getModel("oBatchData3").setProperty("/aData3", oresponse.results)
                          }.bind(this),
                        })
                      }
                    }.bind(this)
                  })



            },
            onAdd11: function () {
                var oBusyDialog = new sap.m.BusyDialog({
                    title: "Fetching Data",
                    text: "Please wait",
                });
                oBusyDialog.open();
                var OperatorCode = this.getView().byId("OperatorCode").getValue();
                var Plant = this.getView().byId("Plant").getValue();
                if (OperatorCode === "") {
                    oBusyDialog.close();
                    MessageBox.show("Please Select Opeartor Code ", {
                        title: "Warning!!!!!!",
                        icon: MessageBox.Icon.ERROR
                    });

                }
                else if (Plant === "") {
                    oBusyDialog.close();
                    MessageBox.show("Please Select Plant ", {
                        title: "Warning!!!!!!",
                        icon: MessageBox.Icon.ERROR
                    });
                }
                else {

                    var beamw = this.getView().byId("beamw").getValue();
                    if (beamw === "") {

                        this.table();
                        oBusyDialog.close();
                    }
                    else {
                        var oTableModel1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");
                        if (oTableModel1.length === 0) {

                            var sno = 1;
                            if (Plant === "2100") {
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    filters: [oFilter1],
                                    urlParameters: { "$top": "5000" },
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                filters: [oFilter],
                                                urlParameters: { "$top": "5000" },
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {

                                                        for (var i = 0; i < oresponse.results.length; i++) {
                                                            var obj = {
                                                                sno: (sno + i),
                                                                Batch: oresponse.results[i].Batch,
                                                                Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                RecBatch: oresponse.results[i].Batch,
                                                                Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                Material: oresponse.results[i].Material,
                                                                MaterialDec: oresponse.results[i].ProductDescription,
                                                                ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                TargetQty: oresponse.results[i].TargetQty,
                                                                Grqty: oresponse.results[i].GrQty,
                                                                Sloc: oresponse.results[i].StorageLocation,
                                                                Uom: "M",
                                                                Quantity: "",
                                                                NetWt: "",
                                                                rollno: "",
                                                                ironpipe: "",
                                                                shadeno: oresponse.results[i].ProductOID,
                                                                setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                salorder: oresponse.results[i].SalesOrder,
                                                                soitem: oresponse.results[i].SalesOrderItem,
                                                                Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                Partyname: oresponse.results[i].CustomerName,
                                                                stdwt: oresponse.results[i].ztowtpermtr,
                                                                Remark: oresponse.results[i].remark
                                                            }
                                                            aTableArr.push(obj);
                                                            TableModel.setProperty("/aFirstTableData", aTableArr);
                                                            oBusyDialog.close();
                                                        }

                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })

                                        }
                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })

                            }
                            else {
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    filters: [oFilter1],
                                    urlParameters: { "$top": "5000" },
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                filters: [oFilter],
                                                urlParameters: { "$top": "5000" },
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {
                                                        for (var i = 0; i < oresponse.results.length; i++) {
                                                            var obj = {
                                                                sno: (sno + i),
                                                                Batch: oresponse.results[i].Batch,
                                                                Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                RecBatch: oresponse.results[i].Batch,
                                                                Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                Material: oresponse.results[i].Material,
                                                                MaterialDec: oresponse.results[i].ProductDescription,
                                                                ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                TargetQty: oresponse.results[i].TargetQty,
                                                                Grqty: oresponse.results[i].GrQty,
                                                                Sloc: oresponse.results[i].StorageLocation,
                                                                Uom: "M",
                                                                Quantity: "",
                                                                NetWt: "",
                                                                rollno: "",
                                                                ironpipe: "",
                                                                shadeno: oresponse.results[i].zpdytype,
                                                                setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                salorder: oresponse.results[i].SalesOrder,
                                                                soitem: oresponse.results[i].SalesOrderItem,
                                                                Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                Partyname: oresponse.results[i].CustomerName,
                                                                stdwt: oresponse.results[i].ztowtpermtr,
                                                                Remark: oresponse.results[i].remark
                                                            }
                                                            aTableArr.push(obj);
                                                            TableModel.setProperty("/aFirstTableData", aTableArr);
                                                        }
                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })
                                        }

                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })



                            }
                        }
                        else {

                            var length = oTableModel1.length - 1;
                            var sno = Number(oTableModel1[length].sno) + 1;
                            if (Plant === "2100") {
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    urlParameters: { "$top": "5000" },
                                    filters: [oFilter1],
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                urlParameters: { "$top": "5000" },
                                                filters: [oFilter],
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {

                                                        for (var i = 0; i < oresponse.results.length; i++) {
                                                            var obj = {
                                                                sno: (sno + i),
                                                                Batch: oresponse.results[i].Batch,
                                                                Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                RecBatch: oresponse.results[i].Batch,
                                                                Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                Material: oresponse.results[i].Material,
                                                                MaterialDec: oresponse.results[i].ProductDescription,
                                                                ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                TargetQty: oresponse.results[i].TargetQty,
                                                                Grqty: oresponse.results[i].GrQty,
                                                                Sloc: oresponse.results[i].StorageLocation,
                                                                Uom: "M",
                                                                Quantity: "",
                                                                NetWt: "",
                                                                rollno: "",
                                                                ironpipe: "",
                                                                shadeno: oresponse.results[i].ProductOID,
                                                                setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                salorder: oresponse.results[i].SalesOrder,
                                                                soitem: oresponse.results[i].SalesOrderItem,
                                                                Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                Partyname: oresponse.results[i].CustomerName,
                                                                stdwt: oresponse.results[i].ztowtpermtr,
                                                                Remark: oresponse.results[i].remark
                                                            }
                                                            aTableArr.push(obj);
                                                            TableModel.setProperty("/aFirstTableData", aTableArr);
                                                            oBusyDialog.close();
                                                        }

                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })

                                        }
                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })

                            }
                            else {
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    urlParameters: { "$top": "5000" },
                                    filters: [oFilter1],
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                urlParameters: { "$top": "5000" },
                                                filters: [oFilter],
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {
                                                        for (var i = 0; i < oresponse.results.length; i++) {
                                                            var obj = {
                                                                sno: (sno + i),
                                                                Batch: oresponse.results[i].Batch,
                                                                Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                RecBatch: oresponse.results[i].Batch,
                                                                Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                Material: oresponse.results[i].Material,
                                                                MaterialDec: oresponse.results[i].ProductDescription,
                                                                ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                TargetQty: oresponse.results[i].TargetQty,
                                                                Grqty: oresponse.results[i].GrQty,
                                                                Sloc: oresponse.results[i].StorageLocation,
                                                                Uom: "M",
                                                                Quantity: "",
                                                                NetWt: "",
                                                                rollno: "",
                                                                ironpipe: "",
                                                                shadeno: oresponse.results[i].zpdytype,
                                                                setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                salorder: oresponse.results[i].SalesOrder,
                                                                soitem: oresponse.results[i].SalesOrderItem,
                                                                Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                Partyname: oresponse.results[i].CustomerName,
                                                                stdwt: oresponse.results[i].ztowtpermtr,
                                                                Remark: oresponse.results[i].remark
                                                            }
                                                            aTableArr.push(obj);
                                                            TableModel.setProperty("/aFirstTableData", aTableArr);
                                                        }
                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })
                                        }

                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })



                            }
                        }
                    }



                }



            },

            onAdd22: function () {
                var oBusyDialog = new sap.m.BusyDialog({
                    title: "Fetching Data",
                    text: "Please wait",
                });
                oBusyDialog.open();
                var OperatorCode = this.getView().byId("OperatorCode").getValue();
                var Plant = this.getView().byId("Plant").getValue();
                if (OperatorCode === "") {
                    oBusyDialog.close();
                    MessageBox.show("Please Select Opeartor Code ", {
                        title: "Warning!!!!!!",
                        icon: MessageBox.Icon.ERROR
                    });

                }
                else if (Plant === "") {
                    oBusyDialog.close();
                    MessageBox.show("Please Select Plant ", {
                        title: "Warning!!!!!!",
                        icon: MessageBox.Icon.ERROR
                    });
                }
                else {

                    var beamw = this.getView().byId("beamw").getValue();
                    if (beamw === "") {

                        this.table();
                        oBusyDialog.close();
                    }
                    else {
                        var oTableModel1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");
                        if (oTableModel1.length === 0) {

                            var sno = 1;
                            if (Plant === "2100") {
                                var PostingDate = this.getView().byId("Fromdt").getValue();
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    filters: [oFilter1],
                                    urlParameters: { "$top": "5000" },
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                filters: [oFilter],
                                                urlParameters: { "$top": "5000" },
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {

                                                        var CreationDate = oresponse.results[0].CreationDate;

                                                        var date1 = new Date(CreationDate);
                                                        var date2 = new Date(PostingDate);

                                                        var Difference_In_Time = date2.getTime() - date1.getTime();

                                                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                                        // var setdate = oresponse.results[0].SetDate;

                                                        var checkingValue = oresponse.results[0].OrderIsTechnicallyCompleted;

                                                        if (CreationDate === null) {
                                                            oBusyDialog.close();
                                                            MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        }
                                                        // else if(setdate === null){
                                                        //     oBusyDialog.close();
                                                        //     MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        // }

                                                        else {
                                                            if ((checkingValue === null || checkingValue === "") && Difference_In_Days > 20) {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First")
                                                            }
                                                            if (checkingValue === "X") {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order is technically completed please get approval")

                                                            }

                                                        }

                                                        for (var i = 0; i < oresponse.results.length; i++) {
                                                            var obj = {
                                                                sno: (sno + i),
                                                                Batch: oresponse.results[i].Batch,
                                                                Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                RecBatch: oresponse.results[i].Batch,
                                                                Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                Material: oresponse.results[i].Material,
                                                                MaterialDec: oresponse.results[i].ProductDescription,
                                                                ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                TargetQty: oresponse.results[i].TargetQty,
                                                                Grqty: oresponse.results[i].GrQty,
                                                                Sloc: oresponse.results[i].StorageLocation,
                                                                Uom: "M",
                                                                Quantity: "",
                                                                NetWt: "",
                                                                rollno: "",
                                                                ironpipe: "",
                                                                shadeno: oresponse.results[i].ProductOID,
                                                                setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                salorder: oresponse.results[i].SalesOrder,
                                                                soitem: oresponse.results[i].SalesOrderItem,
                                                                Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                Partyname: oresponse.results[i].CustomerName,
                                                                stdwt: oresponse.results[i].ztowtpermtr,
                                                                Remark: oresponse.results[i].remark
                                                            }
                                                            aTableArr.push(obj);
                                                            TableModel.setProperty("/aFirstTableData", aTableArr);
                                                            oBusyDialog.close();
                                                        }

                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })

                                        }
                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })

                            }
                            else {
                                var PostingDate = this.getView().byId("Fromdt").getValue();
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    filters: [oFilter1],
                                    urlParameters: { "$top": "5000" },
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                filters: [oFilter],
                                                urlParameters: { "$top": "5000" },
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {

                                                        var CreationDate = oresponse.results[0].CreationDate;

                                                        var date1 = new Date(CreationDate);
                                                        var date2 = new Date(PostingDate);

                                                        var Difference_In_Time = date2.getTime() - date1.getTime();

                                                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                                        // var setdate = oresponse.results[0].SetDate;

                                                        var checkingValue = oresponse.results[0].OrderIsTechnicallyCompleted;

                                                        if (CreationDate === null) {
                                                            oBusyDialog.close();
                                                            MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        }
                                                        // else if(setdate === null){
                                                        //     oBusyDialog.close();
                                                        //     MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        // }

                                                        else {
                                                            if ((checkingValue === null || checkingValue === "") && Difference_In_Days > 20) {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First")
                                                            }
                                                            if (checkingValue === "X") {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order is technically completed please get approval")

                                                            }

                                                        }

                                                        for (var i = 0; i < oresponse.results.length; i++) {
                                                            var obj = {
                                                                sno: (sno + i),
                                                                Batch: oresponse.results[i].Batch,
                                                                Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                RecBatch: oresponse.results[i].Batch,
                                                                Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                Material: oresponse.results[i].Material,
                                                                MaterialDec: oresponse.results[i].ProductDescription,
                                                                ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                TargetQty: oresponse.results[i].TargetQty,
                                                                Grqty: oresponse.results[i].GrQty,
                                                                Sloc: oresponse.results[i].StorageLocation,
                                                                Uom: "M",
                                                                Quantity: "",
                                                                NetWt: "",
                                                                rollno: "",
                                                                ironpipe: "",
                                                                shadeno: oresponse.results[i].zpdytype,
                                                                setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                salorder: oresponse.results[i].SalesOrder,
                                                                soitem: oresponse.results[i].SalesOrderItem,
                                                                Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                Partyname: oresponse.results[i].CustomerName,
                                                                stdwt: oresponse.results[i].ztowtpermtr,
                                                                Remark: oresponse.results[i].remark
                                                            }
                                                            aTableArr.push(obj);
                                                            TableModel.setProperty("/aFirstTableData", aTableArr);
                                                        }
                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })
                                        }

                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })



                            }
                        }
                        else {

                            var length = oTableModel1.length - 1;
                            var sno = Number(oTableModel1[length].sno) + 1;
                            if (Plant === "2100") {
                                var PostingDate = this.getView().byId("Fromdt").getValue();
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    urlParameters: { "$top": "5000" },
                                    filters: [oFilter1],
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                urlParameters: { "$top": "5000" },
                                                filters: [oFilter],
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {


                                                        var CreationDate = oresponse.results[0].CreationDate;

                                                        var date1 = new Date(CreationDate);
                                                        var date2 = new Date(PostingDate);

                                                        var Difference_In_Time = date2.getTime() - date1.getTime();

                                                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                                        // var setdate = oresponse.results[0].SetDate;

                                                        var checkingValue = oresponse.results[0].OrderIsTechnicallyCompleted;

                                                        if (CreationDate === null) {
                                                            oBusyDialog.close();
                                                            MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        }
                                                        // else if(setdate === null){
                                                        //     oBusyDialog.close();
                                                        //     MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        // }

                                                        else {
                                                            if ((checkingValue === null || checkingValue === "") && Difference_In_Days > 20) {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First")
                                                            }
                                                            if (checkingValue === "X") {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order is technically completed please get approval")

                                                            }

                                                        }

                                                        for (var i = 0; i < oresponse.results.length; i++) {
                                                            var obj = {
                                                                sno: (sno + i),
                                                                Batch: oresponse.results[i].Batch,
                                                                Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                RecBatch: oresponse.results[i].Batch,
                                                                Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                Material: oresponse.results[i].Material,
                                                                MaterialDec: oresponse.results[i].ProductDescription,
                                                                ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                TargetQty: oresponse.results[i].TargetQty,
                                                                Grqty: oresponse.results[i].GrQty,
                                                                Sloc: oresponse.results[i].StorageLocation,
                                                                Uom: "M",
                                                                Quantity: "",
                                                                NetWt: "",
                                                                rollno: "",
                                                                ironpipe: "",
                                                                shadeno: oresponse.results[i].ProductOID,
                                                                setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                salorder: oresponse.results[i].SalesOrder,
                                                                soitem: oresponse.results[i].SalesOrderItem,
                                                                Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                Partyname: oresponse.results[i].CustomerName,
                                                                stdwt: oresponse.results[i].ztowtpermtr,
                                                                Remark: oresponse.results[i].remark
                                                            }
                                                            aTableArr.push(obj);
                                                            TableModel.setProperty("/aFirstTableData", aTableArr);
                                                            oBusyDialog.close();
                                                        }

                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })

                                        }
                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })

                            }
                            else {
                                var PostingDate = this.getView().byId("Fromdt").getValue();
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    urlParameters: { "$top": "5000" },
                                    filters: [oFilter1],
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                urlParameters: { "$top": "5000" },
                                                filters: [oFilter],
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {


                                                        var CreationDate = oresponse.results[0].CreationDate;

                                                        var date1 = new Date(CreationDate);
                                                        var date2 = new Date(PostingDate);

                                                        var Difference_In_Time = date2.getTime() - date1.getTime();

                                                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                                        // var setdate = oresponse.results[0].SetDate;

                                                        var checkingValue = oresponse.results[0].OrderIsTechnicallyCompleted;

                                                        if (CreationDate === null) {
                                                            oBusyDialog.close();
                                                            MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        }
                                                        // else if(setdate === null){
                                                        //     oBusyDialog.close();
                                                        //     MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        // }

                                                        else {
                                                            if ((checkingValue === null || checkingValue === "") && Difference_In_Days > 20) {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First")
                                                            }
                                                            if (checkingValue === "X") {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order is technically completed please get approval")

                                                            }

                                                        }
                                                        for (var i = 0; i < oresponse.results.length; i++) {
                                                            var obj = {
                                                                sno: (sno + i),
                                                                Batch: oresponse.results[i].Batch,
                                                                Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                RecBatch: oresponse.results[i].Batch,
                                                                Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                Material: oresponse.results[i].Material,
                                                                MaterialDec: oresponse.results[i].ProductDescription,
                                                                ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                TargetQty: oresponse.results[i].TargetQty,
                                                                Grqty: oresponse.results[i].GrQty,
                                                                Sloc: oresponse.results[i].StorageLocation,
                                                                Uom: "M",
                                                                Quantity: "",
                                                                NetWt: "",
                                                                rollno: "",
                                                                ironpipe: "",
                                                                shadeno: oresponse.results[i].zpdytype,
                                                                setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                salorder: oresponse.results[i].SalesOrder,
                                                                soitem: oresponse.results[i].SalesOrderItem,
                                                                Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                Partyname: oresponse.results[i].CustomerName,
                                                                stdwt: oresponse.results[i].ztowtpermtr,
                                                                Remark: oresponse.results[i].remark
                                                            }
                                                            aTableArr.push(obj);
                                                            TableModel.setProperty("/aFirstTableData", aTableArr);
                                                        }
                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })
                                        }

                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })



                            }
                        }
                    }



                }



            },

            onAdd: function () {
                var oBusyDialog = new sap.m.BusyDialog({
                    title: "Fetching Data",
                    text: "Please wait",
                });
                oBusyDialog.open();
                var OperatorCode = this.getView().byId("OperatorCode").getValue();
                var Plant = this.getView().byId("Plant").getValue();
                if (OperatorCode === "") {
                    oBusyDialog.close();
                    MessageBox.show("Please Select Opeartor Code ", {
                        title: "Warning!!!!!!",
                        icon: MessageBox.Icon.ERROR
                    });

                }
                else if (Plant === "") {
                    oBusyDialog.close();
                    MessageBox.show("Please Select Plant ", {
                        title: "Warning!!!!!!",
                        icon: MessageBox.Icon.ERROR
                    });
                }
                else {

                    var beamw = this.getView().byId("beamw").getValue();
                    if (beamw === "") {

                        this.table();
                        oBusyDialog.close();
                    }
                    else {
                        var oTableModel1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");
                        if (oTableModel1.length === 0) {

                            var sno = 1;
                            if (Plant === "2100") {
                                var PostingDate = this.getView().byId("Fromdt").getValue();
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    filters: [oFilter1],
                                    urlParameters: { "$top": "5000" },
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                filters: [oFilter],
                                                urlParameters: { "$top": "5000" },
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {

                                                        var CreationDate = oresponse.results[0].CreationDate;
                                                        var TecoApproved = oresponse.results[0].sno;

                                                        var date1 = new Date(CreationDate);
                                                        var date2 = new Date(PostingDate);

                                                        var Difference_In_Time = date2.getTime() - date1.getTime();

                                                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                                        // var setdate = oresponse.results[0].SetDate;

                                                        var checkingValue = oresponse.results[0].OrderIsTechnicallyCompleted;

                                                        if (CreationDate === null) {
                                                            oBusyDialog.close();
                                                            MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        }
                                                        // else if(setdate === null){
                                                        //     oBusyDialog.close();
                                                        //     MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        // }

                                                        else {
                                                            if (checkingValue !== "X" && Difference_In_Days > 20) {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First")
                                                            }
                                                            
                                                            else if (checkingValue === "X" && TecoApproved !== "") {
                                                                    oBusyDialog.close();
                                                                    for (var i = 0; i < oresponse.results.length; i++) {
                                                                        var obj = {
                                                                            sno: (sno + i),
                                                                            Batch: oresponse.results[i].Batch,
                                                                            Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                            RecBatch: oresponse.results[i].Batch,
                                                                            Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                            Material: oresponse.results[i].Material,
                                                                            MaterialDec: oresponse.results[i].ProductDescription,
                                                                            ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                            TargetQty: oresponse.results[i].TargetQty,
                                                                            Grqty: oresponse.results[i].GrQty,
                                                                            Sloc: oresponse.results[i].StorageLocation,
                                                                            Uom: "M",
                                                                            Quantity: "",
                                                                            NetWt: "",
                                                                            rollno: "",
                                                                            ironpipe: "",
                                                                            shadeno: oresponse.results[i].ProductOID,
                                                                            setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                            salorder: oresponse.results[i].SalesOrder,
                                                                            soitem: oresponse.results[i].SalesOrderItem,
                                                                            Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                            Partyname: oresponse.results[i].CustomerName,
                                                                            stdwt: oresponse.results[i].ztowtpermtr,
                                                                            Remark: oresponse.results[i].remark
                                                                        }
                                                                        aTableArr.push(obj);
                                                                        TableModel.setProperty("/aFirstTableData", aTableArr);
                                                                        oBusyDialog.close();
                                                                    }

                                                                }
                                                                else if(Difference_In_Days < 20){
                                                                    oBusyDialog.close();
                                                                    for (var i = 0; i < oresponse.results.length; i++) {
                                                                        var obj = {
                                                                            sno: (sno + i),
                                                                            Batch: oresponse.results[i].Batch,
                                                                            Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                            RecBatch: oresponse.results[i].Batch,
                                                                            Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                            Material: oresponse.results[i].Material,
                                                                            MaterialDec: oresponse.results[i].ProductDescription,
                                                                            ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                            TargetQty: oresponse.results[i].TargetQty,
                                                                            Grqty: oresponse.results[i].GrQty,
                                                                            Sloc: oresponse.results[i].StorageLocation,
                                                                            Uom: "M",
                                                                            Quantity: "",
                                                                            NetWt: "",
                                                                            rollno: "",
                                                                            ironpipe: "",
                                                                            shadeno: oresponse.results[i].ProductOID,
                                                                            setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                            salorder: oresponse.results[i].SalesOrder,
                                                                            soitem: oresponse.results[i].SalesOrderItem,
                                                                            Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                            Partyname: oresponse.results[i].CustomerName,
                                                                            stdwt: oresponse.results[i].ztowtpermtr,
                                                                            Remark: oresponse.results[i].remark
                                                                        }
                                                                        aTableArr.push(obj);
                                                                        TableModel.setProperty("/aFirstTableData", aTableArr);
                                                                        oBusyDialog.close();
                                                                    }
                                                                }
                                                                else
                                                                {
                                                                    oBusyDialog.close();
                                                                    return MessageBox.error("Order is technically completed please get approval")
                                                                }
                                                        }

                                                    }

                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })

                                        }
                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })

                            }
                            else {
                                var PostingDate = this.getView().byId("Fromdt").getValue();
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    filters: [oFilter1],
                                    urlParameters: { "$top": "5000" },
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                filters: [oFilter],
                                                urlParameters: { "$top": "5000" },
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {

                                                        var CreationDate = oresponse.results[0].CreationDate;
                                                        var TecoApproved = oresponse.results[0].sno;

                                                        var date1 = new Date(CreationDate);
                                                        var date2 = new Date(PostingDate);

                                                        var Difference_In_Time = date2.getTime() - date1.getTime();

                                                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                                        // var setdate = oresponse.results[0].SetDate;

                                                        var checkingValue = oresponse.results[0].OrderIsTechnicallyCompleted;

                                                        if (CreationDate === null) {
                                                            oBusyDialog.close();
                                                            MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        }
                                                        // else if(setdate === null){
                                                        //     oBusyDialog.close();
                                                        //     MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        // }

                                                        else {
                                                            if (checkingValue !== "X" && Difference_In_Days > 20) {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First")
                                                            }
                                                            else if (checkingValue === "X" && TecoApproved !== "") {
                                                                oBusyDialog.close();
                                                                for (var i = 0; i < oresponse.results.length; i++) {
                                                                    var obj = {
                                                                        sno: (sno + i),
                                                                        Batch: oresponse.results[i].Batch,
                                                                        Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                        RecBatch: oresponse.results[i].Batch,
                                                                        Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                        Material: oresponse.results[i].Material,
                                                                        MaterialDec: oresponse.results[i].ProductDescription,
                                                                        ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                        TargetQty: oresponse.results[i].TargetQty,
                                                                        Grqty: oresponse.results[i].GrQty,
                                                                        Sloc: oresponse.results[i].StorageLocation,
                                                                        Uom: "M",
                                                                        Quantity: "",
                                                                        NetWt: "",
                                                                        rollno: "",
                                                                        ironpipe: "",
                                                                        shadeno: oresponse.results[i].ProductOID,
                                                                        setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                        salorder: oresponse.results[i].SalesOrder,
                                                                        soitem: oresponse.results[i].SalesOrderItem,
                                                                        Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                        Partyname: oresponse.results[i].CustomerName,
                                                                        stdwt: oresponse.results[i].ztowtpermtr,
                                                                        Remark: oresponse.results[i].remark
                                                                    }
                                                                    aTableArr.push(obj);
                                                                    TableModel.setProperty("/aFirstTableData", aTableArr);
                                                                    oBusyDialog.close();
                                                                }

                                                            }
                                                            else if(Difference_In_Days < 20){
                                                                oBusyDialog.close();
                                                                for (var i = 0; i < oresponse.results.length; i++) {
                                                                    var obj = {
                                                                        sno: (sno + i),
                                                                        Batch: oresponse.results[i].Batch,
                                                                        Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                        RecBatch: oresponse.results[i].Batch,
                                                                        Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                        Material: oresponse.results[i].Material,
                                                                        MaterialDec: oresponse.results[i].ProductDescription,
                                                                        ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                        TargetQty: oresponse.results[i].TargetQty,
                                                                        Grqty: oresponse.results[i].GrQty,
                                                                        Sloc: oresponse.results[i].StorageLocation,
                                                                        Uom: "M",
                                                                        Quantity: "",
                                                                        NetWt: "",
                                                                        rollno: "",
                                                                        ironpipe: "",
                                                                        shadeno: oresponse.results[i].ProductOID,
                                                                        setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                        salorder: oresponse.results[i].SalesOrder,
                                                                        soitem: oresponse.results[i].SalesOrderItem,
                                                                        Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                        Partyname: oresponse.results[i].CustomerName,
                                                                        stdwt: oresponse.results[i].ztowtpermtr,
                                                                        Remark: oresponse.results[i].remark
                                                                    }
                                                                    aTableArr.push(obj);
                                                                    TableModel.setProperty("/aFirstTableData", aTableArr);
                                                                    oBusyDialog.close();
                                                                }
                                                            }
                                                            else
                                                            {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order is technically completed please get approval")
                                                            }
                                                        }
                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })
                                        }

                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })



                            }
                        }
                        else {

                            var length = oTableModel1.length - 1;
                            var sno = Number(oTableModel1[length].sno) + 1;
                            if (Plant === "2100") {
                                var PostingDate = this.getView().byId("Fromdt").getValue();
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    urlParameters: { "$top": "5000" },
                                    filters: [oFilter1],
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                urlParameters: { "$top": "5000" },
                                                filters: [oFilter],
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {


                                                        var CreationDate = oresponse.results[0].CreationDate;
                                                        var TecoApproved = oresponse.results[0].sno;


                                                        var date1 = new Date(CreationDate);
                                                        var date2 = new Date(PostingDate);

                                                        var Difference_In_Time = date2.getTime() - date1.getTime();

                                                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                                        // var setdate = oresponse.results[0].SetDate;

                                                        var checkingValue = oresponse.results[0].OrderIsTechnicallyCompleted;

                                                        if (CreationDate === null) {
                                                            oBusyDialog.close();
                                                            MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        }
                                                        // else if(setdate === null){
                                                        //     oBusyDialog.close();
                                                        //     MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        // }

                                                        else {
                                                            if (checkingValue !== "X" && Difference_In_Days > 20) {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First")
                                                            }
                                                            else if (checkingValue === "X" && TecoApproved !== "") {
                                                                oBusyDialog.close();
                                                                for (var i = 0; i < oresponse.results.length; i++) {
                                                                    var obj = {
                                                                        sno: (sno + i),
                                                                        Batch: oresponse.results[i].Batch,
                                                                        Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                        RecBatch: oresponse.results[i].Batch,
                                                                        Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                        Material: oresponse.results[i].Material,
                                                                        MaterialDec: oresponse.results[i].ProductDescription,
                                                                        ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                        TargetQty: oresponse.results[i].TargetQty,
                                                                        Grqty: oresponse.results[i].GrQty,
                                                                        Sloc: oresponse.results[i].StorageLocation,
                                                                        Uom: "M",
                                                                        Quantity: "",
                                                                        NetWt: "",
                                                                        rollno: "",
                                                                        ironpipe: "",
                                                                        shadeno: oresponse.results[i].ProductOID,
                                                                        setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                        salorder: oresponse.results[i].SalesOrder,
                                                                        soitem: oresponse.results[i].SalesOrderItem,
                                                                        Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                        Partyname: oresponse.results[i].CustomerName,
                                                                        stdwt: oresponse.results[i].ztowtpermtr,
                                                                        Remark: oresponse.results[i].remark
                                                                    }
                                                                    aTableArr.push(obj);
                                                                    TableModel.setProperty("/aFirstTableData", aTableArr);
                                                                    oBusyDialog.close();
                                                                }

                                                            }
                                                            else if(Difference_In_Days < 20){
                                                                oBusyDialog.close();
                                                                for (var i = 0; i < oresponse.results.length; i++) {
                                                                    var obj = {
                                                                        sno: (sno + i),
                                                                        Batch: oresponse.results[i].Batch,
                                                                        Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                        RecBatch: oresponse.results[i].Batch,
                                                                        Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                        Material: oresponse.results[i].Material,
                                                                        MaterialDec: oresponse.results[i].ProductDescription,
                                                                        ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                        TargetQty: oresponse.results[i].TargetQty,
                                                                        Grqty: oresponse.results[i].GrQty,
                                                                        Sloc: oresponse.results[i].StorageLocation,
                                                                        Uom: "M",
                                                                        Quantity: "",
                                                                        NetWt: "",
                                                                        rollno: "",
                                                                        ironpipe: "",
                                                                        shadeno: oresponse.results[i].ProductOID,
                                                                        setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                        salorder: oresponse.results[i].SalesOrder,
                                                                        soitem: oresponse.results[i].SalesOrderItem,
                                                                        Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                        Partyname: oresponse.results[i].CustomerName,
                                                                        stdwt: oresponse.results[i].ztowtpermtr,
                                                                        Remark: oresponse.results[i].remark
                                                                    }
                                                                    aTableArr.push(obj);
                                                                    TableModel.setProperty("/aFirstTableData", aTableArr);
                                                                    oBusyDialog.close();
                                                                }
                                                            }
                                                            else
                                                            {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order is technically completed please get approval")
                                                            }
                                                        }

                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })

                                        }
                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })

                            }
                            else {
                                var PostingDate = this.getView().byId("Fromdt").getValue();
                                var beamw = this.getView().byId("beamw").getValue();
                                var oModel = this.getView().getModel();
                                var TableModel = this.getView().getModel("oFirstTableDataModel");
                                var aTableArr = TableModel.getProperty("/aFirstTableData")
                                var oFilter = new sap.ui.model.Filter("Batch", "EQ", beamw);
                                var oFilter1 = new sap.ui.model.Filter("Beamno", "EQ", beamw);
                                oModel.read("/BeamProgram", {
                                    urlParameters: { "$top": "5000" },
                                    filters: [oFilter1],
                                    success: function (oresponse) {
                                        if (oresponse.results.length === 0) {
                                            oBusyDialog.close();
                                            MessageBox.show("Data Not Found in Beam Program", {
                                                title: "Warning!!!!!!",
                                                icon: MessageBox.Icon.ERROR
                                            });
                                        }
                                        else {
                                            oModel.read("/GREY_GRN", {
                                                urlParameters: { "$top": "5000" },
                                                filters: [oFilter],
                                                success: function (oresponse) {
                                                    if (oresponse.results.length === 0) {
                                                        oBusyDialog.close();
                                                        MessageBox.show("Data Not Found in Grey", {
                                                            title: "Warning!!!!!!",
                                                            icon: MessageBox.Icon.ERROR
                                                        });
                                                    }
                                                    else {


                                                        var CreationDate = oresponse.results[0].CreationDate;
                                                        var TecoApproved = oresponse.results[0].sno;


                                                        var date1 = new Date(CreationDate);
                                                        var date2 = new Date(PostingDate);

                                                        var Difference_In_Time = date2.getTime() - date1.getTime();

                                                        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                                                        // var setdate = oresponse.results[0].SetDate;

                                                        var checkingValue = oresponse.results[0].OrderIsTechnicallyCompleted;

                                                        if (CreationDate === null) {
                                                            oBusyDialog.close();
                                                            MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        }
                                                        // else if(setdate === null){
                                                        //     oBusyDialog.close();
                                                        //     MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First");
                                                        // }

                                                        else {
                                                            if (checkingValue !== "X" && Difference_In_Days > 20) {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order Creation Date is older than 20 days Please TECO this production order First")
                                                            }
                                                            else if (checkingValue === "X" && TecoApproved !== "") {
                                                                oBusyDialog.close();
                                                                for (var i = 0; i < oresponse.results.length; i++) {
                                                                    var obj = {
                                                                        sno: (sno + i),
                                                                        Batch: oresponse.results[i].Batch,
                                                                        Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                        RecBatch: oresponse.results[i].Batch,
                                                                        Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                        Material: oresponse.results[i].Material,
                                                                        MaterialDec: oresponse.results[i].ProductDescription,
                                                                        ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                        TargetQty: oresponse.results[i].TargetQty,
                                                                        Grqty: oresponse.results[i].GrQty,
                                                                        Sloc: oresponse.results[i].StorageLocation,
                                                                        Uom: "M",
                                                                        Quantity: "",
                                                                        NetWt: "",
                                                                        rollno: "",
                                                                        ironpipe: "",
                                                                        shadeno: oresponse.results[i].ProductOID,
                                                                        setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                        salorder: oresponse.results[i].SalesOrder,
                                                                        soitem: oresponse.results[i].SalesOrderItem,
                                                                        Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                        Partyname: oresponse.results[i].CustomerName,
                                                                        stdwt: oresponse.results[i].ztowtpermtr,
                                                                        Remark: oresponse.results[i].remark
                                                                    }
                                                                    aTableArr.push(obj);
                                                                    TableModel.setProperty("/aFirstTableData", aTableArr);
                                                                    oBusyDialog.close();
                                                                }

                                                            }
                                                            else if(Difference_In_Days < 20){
                                                                oBusyDialog.close();
                                                                for (var i = 0; i < oresponse.results.length; i++) {
                                                                    var obj = {
                                                                        sno: (sno + i),
                                                                        Batch: oresponse.results[i].Batch,
                                                                        Partybeam: oresponse.results[i].YY1_PartyBeam_ORD,
                                                                        RecBatch: oresponse.results[i].Batch,
                                                                        Loomno: oresponse.results[i].YY1_LoomNumber_ORD,
                                                                        Material: oresponse.results[i].Material,
                                                                        MaterialDec: oresponse.results[i].ProductDescription,
                                                                        ProdOrder: oresponse.results[i].ManufacturingOrder,
                                                                        TargetQty: oresponse.results[i].TargetQty,
                                                                        Grqty: oresponse.results[i].GrQty,
                                                                        Sloc: oresponse.results[i].StorageLocation,
                                                                        Uom: "M",
                                                                        Quantity: "",
                                                                        NetWt: "",
                                                                        rollno: "",
                                                                        ironpipe: "",
                                                                        shadeno: oresponse.results[i].ProductOID,
                                                                        setno: oresponse.results[i].YY1_SetNo_ORD,
                                                                        salorder: oresponse.results[i].SalesOrder,
                                                                        soitem: oresponse.results[i].SalesOrderItem,
                                                                        Pick: oresponse.results[i].YY1_Pick_ORD,
                                                                        Partyname: oresponse.results[i].CustomerName,
                                                                        stdwt: oresponse.results[i].ztowtpermtr,
                                                                        Remark: oresponse.results[i].remark
                                                                    }
                                                                    aTableArr.push(obj);
                                                                    TableModel.setProperty("/aFirstTableData", aTableArr);
                                                                    oBusyDialog.close();
                                                                }
                                                            }
                                                            else
                                                            {
                                                                oBusyDialog.close();
                                                                return MessageBox.error("Order is technically completed please get approval")
                                                            }
                                                        }
                                                    }
                                                    oBusyDialog.close();
                                                }.bind(this),
                                                error: function (error) {
                                                    oBusyDialog.close();
                                                    MessageBox.show("Data Not Read Successfully in Grey", {
                                                        title: "Warning!!!!!!",
                                                        icon: MessageBox.Icon.ERROR
                                                    });
                                                }

                                            })
                                        }

                                    }.bind(this),
                                    error: function (error) {
                                        oBusyDialog.close();
                                        MessageBox.show("Data Not Read Successfully in Beam Program", {
                                            title: "Warning!!!!!!",
                                            icon: MessageBox.Icon.ERROR
                                        });
                                    }
                                })



                            }
                        }
                    }



                }



            },














            DeletaTableData11: function (oEvent) {


                var oTable = oEvent.getSource().getParent().getParent();
                var aSelectedIndex = oTable.getSelectedIndices();
                if (aSelectedIndex.length > 1) {
                    MessageBox.error("Please Select 1 batch ....")
                }
                else {
                    var oTableModel = this.getView().getModel("oFirstTableDataModel");
                    var aTableArr = oTableModel.getProperty("/aFirstTableData");
                    var aNewArr = [];
                    var se = aSelectedIndex[0];
                    var sno = aTableArr[se].sno;

                    for (var i = 0; i < aSelectedIndex.length; i++) {

                        aNewArr.push(aTableArr[aSelectedIndex[i]])
                    }

                    aNewArr.map(function (item) {
                        var FaultCode = item.sno;
                        var iIndex = "";
                        aTableArr.map(function (items, index) {
                            if (FaultCode === items.sno) {
                                iIndex = index
                            }
                        })
                        aTableArr.splice(iIndex, 1);
                    })
                    oTableModel.setProperty("/aFirstTableData", aTableArr)

                    var aNewArr1 = []
                    var table2 = this.getView().getModel("oFirstTableDataModel1")
                    var aTableArr1 = table2.getProperty("/aFirstTableData1")

                    aTableArr1.map(function (items) {
                        if (items.sno != sno) {
                            aNewArr1.push(items)
                        }
                    })
                    table2.setProperty("/aFirstTableData1", aNewArr1)




                }


            },



            DeletaTableData: function (oEvent) {


                var oTable = oEvent.getSource().getParent().getParent();
                var aSelectedIndex = oTable.getSelectedIndices();
                // if (aSelectedIndex.length > 1) {
                //     MessageBox.error("Please Select 1 batch ....")
                // }
                // else {
                    var oTableModel = this.getView().getModel("oFirstTableDataModel");
                    var aTableArr = oTableModel.getProperty("/aFirstTableData");
                    var aNewArr = [];
                    var se = aSelectedIndex[0];
                    var sno = aTableArr[se].sno;

                    for (var i = 0; i < aSelectedIndex.length; i++) {

                        aNewArr.push(aTableArr[aSelectedIndex[i]])
                    }

                    aNewArr.map(function (item) {
                        var FaultCode = item.sno;
                        var iIndex = "";
                        aTableArr.map(function (items, index) {
                            if (FaultCode === items.sno) {
                                iIndex = index
                            }
                        })
                        aTableArr.splice(iIndex, 1);
                    })
                    oTableModel.setProperty("/aFirstTableData", aTableArr)

                    var aNewArr1 = []
                    var table2 = this.getView().getModel("oFirstTableDataModel1")
                    var aTableArr1 = table2.getProperty("/aFirstTableData1")

                    aTableArr1.map(function (items) {
                        if (items.sno != sno) {
                            aNewArr1.push(items)
                        }
                    })
                    table2.setProperty("/aFirstTableData1", aNewArr1)




                // }


            },




            NewRowEnterFunctionForFirstTable: function (oEvent) {
                var oTableModel1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");

                if (oTableModel1.length === 0) {
                    var TableModel = this.getView().getModel("oFirstTableDataModel");
                    var aTableArr = TableModel.getProperty("/aFirstTableData")
                    var aTablearr = [];
                    var aNewArr = [];
                    // var oTable = sap.ui.core.UIComponent.getRouterFor(this).getView().byId("table1");
                    // var oTable = this.getView().byId("table1");
                    // var iTableLength = oTable.getLength();
                    var oTable = this.getView().byId("table1"); //get the table by ID
                    var iTableLength = oTable.getRows().length; //get the length of items array
                    var RowVisible = iTableLength + 10; //get the length of items array
                    var oObject = {
                        "RowVisible": RowVisible
                    }
                    this.getView().setModel(new sap.ui.model.json.JSONModel(oObject), "oRowVisibleModel")
                    this.getView().getModel("oRowVisibleModel").setProperty("/RowVisible", RowVisible)
                    var obj = {
                        sno: 1,
                        Batch: "",
                        Partybeam: "",
                        RecBatch: "",
                        rollno: "",
                        Quantity: "",
                        ironpipe: "",
                        grossWt: "",
                        NetWt: "",
                        Loomno: "",
                        Material: "",
                        MaterialDec: "",
                        ProdOrder: "",
                        TargetQty: "",
                        GrQty: "",
                        BalanceQty: "",
                        Sloc: "",
                        Uom: "M",
                        shadeno: ""
                    }
                    aTableArr.push(obj);
                    TableModel.setProperty("/aFirstTableData", aTableArr);
                    if (RowVisible != 1) {
                        // this.CallSecondTableData();
                    }

                }
                else {

                    if (oTableModel1.length < 10) {
                        var oTableModel1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");
                        var length = oTableModel1.length - 1;
                        var sno = oTableModel1[length].sno + 1;


                        var TableModel = this.getView().getModel("oFirstTableDataModel");
                        var aTableArr = TableModel.getProperty("/aFirstTableData")
                        var aTablearr = [];
                        var aNewArr = [];
                        // var oTable = sap.ui.core.UIComponent.getRouterFor(this).getView().byId("table1");
                        // var oTable = this.getView().byId("table1");
                        // var iTableLength = oTable.getLength();
                        var oTable = this.getView().byId("table1"); //get the table by ID
                        var iTableLength = oTable.getRows().length; //get the length of items array
                        var RowVisible = iTableLength + 1; //get the length of items array
                        var oObject = {
                            "RowVisible": RowVisible
                        }
                        this.getView().setModel(new sap.ui.model.json.JSONModel(oObject), "oRowVisibleModel")
                        this.getView().getModel("oRowVisibleModel").setProperty("/RowVisible", RowVisible)
                        var obj = {
                            sno: sno,
                            Batch: "",
                            Partybeam: "",
                            RecBatch: "",
                            rollno: "",
                            Quantity: "",
                            NetWt: "",
                            ironpipe: "",
                            grossWt: "",
                            Loomno: "",
                            Material: "",
                            MaterialDec: "",
                            ProdOrder: "",
                            TargetQty: "",
                            GrQty: "",
                            BalanceQty: "",
                            Sloc: "",
                            Uom: "M",
                            shadeno: ""
                        }
                        aTableArr.push(obj);
                        TableModel.setProperty("/aFirstTableData", aTableArr);
                        if (RowVisible != 1) {
                            // this.CallSecondTableData();
                        }

                    }



                }

            },
            table: function () {

                var TableModel = this.getView().getModel("oFirstTableDataModel");
                var aTableArr = TableModel.getProperty("/aFirstTableData")
                var table1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");
                if (table1.length === 0) {
                    var obj = {
                        sno: "1",
                        Batch: "",
                        Partybeam: "",
                        RecBatch: "",
                        setno: "",
                        rollno: "",
                        Quantity: "",
                        NetWt: "",
                        ironpipe: "",
                        grossWt: "",
                        Loomno: "",
                        Material: "",
                        MaterialDec: "",
                        ProdOrder: "",
                        TargetQty: "",
                        GrQty: "",
                        BalanceQty: "",
                        Sloc: "",
                        Uom: "M",
                        shadeno: ""
                    }
                    aTableArr.push(obj);
                    TableModel.setProperty("/aFirstTableData", aTableArr);
                }
                else {

                    var sno = table1.length + 1;
                    var obj = {
                        sno: sno,
                        Batch: "",
                        Partybeam: "",
                        RecBatch: "",
                        setno: "",
                        rollno: "",
                        Quantity: "",
                        NetWt: "",
                        ironpipe: "",
                        grossWt: "",
                        Loomno: "",
                        Material: "",
                        MaterialDec: "",
                        ProdOrder: "",
                        TargetQty: "",
                        GrQty: "",
                        BalanceQty: "",
                        Sloc: "",
                        Uom: "M",
                        shadeno: ""
                    }
                    aTableArr.push(obj);
                    TableModel.setProperty("/aFirstTableData", aTableArr);
                }



            },
            WTMTER: function (oEvent) {
                var oContext = oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject();
                var NetWt = Number(oContext.NetWt);
                var Quantity = Number(oContext.Quantity);
                var wtmtr = NetWt / Quantity;
                wtmtr = parseFloat(wtmtr).toFixed(3);
                var ironp = oContext.ironpipe;
                if (ironp != "") {
                    var ironpipe = Number(oContext.ironpipe);
                    var grosswt = NetWt + ironpipe;
                    grosswt = parseFloat(grosswt).toFixed(3);
                    oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().grossWt = grosswt
                }
                oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().wtmtr = wtmtr
                var oTab = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");

                var a = 0;
                for (var i = 0; i < oTab.length; i++) {
                    a = a + Number(oTab[i].NetWt);
                }
                a = parseFloat(a).toFixed(3);
                var oInputForTotalPieces = this.getView().byId("TotalWeight");
                oInputForTotalPieces.setValue(a)


            },
            Recbatch: function (oEvent) {
                var oContext = oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject();
                var RecBatch = oContext.RecBatch;
                var oModel = this.getView().getModel();
                var Plant = this.getView().byId("Plant").getValue();
                var oFilter = new sap.ui.model.Filter("Batch", "EQ", RecBatch);
                var oFilter1 = new sap.ui.model.Filter("Plant", "EQ", Plant);
                oModel.read("/ZPP_GOODS101", {
                    filters: [oFilter, oFilter1],
                    urlParameters: { "$top": "500000" },
                    success: function (oresponse) {
                        if (oresponse.results.length === 0) {

                        }
                        else if (oresponse.results.length > 0) {
                            MessageBox.error("Data Already Existed Reciving Batch")
                        }
                    }.bind(this),
                    error: function (error) {
                        oBusyDialog.close();
                        MessageBox.show("Data Not Read Successfully", {
                            title: "Warning!!!!!!",
                            icon: MessageBox.Icon.ERROR
                        });
                    }

                })

            },
            onRead: function (oEvent) {

                var OperatorCode = this.getView().byId("OperatorCode").getValue();
                var Plant = this.getView().byId("Plant").getValue();
                if (OperatorCode === "") {
                    MessageBox.show("Please Select Opeartor Code ", {
                        title: "Warning!!!!!!",
                        icon: MessageBox.Icon.ERROR
                    });

                }
                else {
                    var oContext = oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject();
                    var data = this.getView().getModel("oBatchData").getProperty("/aData");
                    var BatchVar11 = oContext.Batch;
                    var BatchVar = BatchVar11.toUpperCase();

                    var beamprogram = this.getView().getModel("oBatchData3").getProperty("/aData3");


                    var beamarray = [];
                    beamprogram.map(function (items) {
                        if (items.Beamno === BatchVar) {
                            beamarray.push(items);
                        }
                    })

                    if (beamarray.length === 0) {
                        MessageBox.show("Data Not Found in Beam Program", {
                            title: "Warning!!!!!!",
                            icon: MessageBox.Icon.ERROR
                        });
                    }
                    else if (beamarray[0].Beamno === BatchVar) {
                        var aNewArr = [];

                        data.map(function (items) {
                            if (items.Batch === BatchVar) {
                                aNewArr.push(items);
                            }
                        })
                        var recbatch = BatchVar;  /////+ add[length]
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().Batch = BatchVar
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().RecBatch = recbatch
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().Material = aNewArr[0].Material
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().Sloc = aNewArr[0].StorageLocation
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().ProdOrder = aNewArr[0].ManufacturingOrder
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().MaterialDec = aNewArr[0].ProductDescription
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().TargetQty = aNewArr[0].TargetQty
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().Grqty = aNewArr[0].GrQty
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().setno = aNewArr[0].YY1_SetNo_ORD
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().salorder = aNewArr[0].SalesOrder
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().soitem = aNewArr[0].SalesOrderItem
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().Pick = aNewArr[0].YY1_Pick_ORD
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().Loomno = aNewArr[0].YY1_LoomNumber_ORD
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().Partyname = aNewArr[0].CustomerName
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().stdwt = aNewArr[0].ztowtpermtr
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().Partybeam = aNewArr[0].YY1_PartyBeam_ORD
                        oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().Remark = aNewArr[0].remark

                        if (Plant === "2100") {
                            oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().shadeno = aNewArr[0].ProductOID
                        }
                        else {
                            oEvent.getSource().getBindingContext("oFirstTableDataModel").getObject().shadeno = aNewArr[0].zpdytype
                        }


                    }
                    else {
                        MessageBox.show("Data Not Found in Beam Program", {
                            title: "Warning!!!!!!",
                            icon: MessageBox.Icon.ERROR
                        });
                    }
                }
                this.table();
            },
            EmptyRowFound: function () {
                var oTableEmptyRowFoundData = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");
                var ArrayVar = [];
                oTableEmptyRowFoundData.map(function (items) {
                    var var1 = items.Quantity;
                    if (var1 != "") {
                        var Var2 = Number(var1);
                        ArrayVar.push(Var2);
                    }

                })
                var totalSum = 0;
                var arrayLen1 = ArrayVar.length;
                var arrayLen2 = arrayLen1 - 1;
                for (var i = 0; i < arrayLen1; i++) {
                    totalSum += ArrayVar[i];
                }
                totalSum = parseFloat(totalSum).toFixed(3);
                var oInputForTotalPieces = this.getView().byId("TotalPieces");
                oInputForTotalPieces.setValue(arrayLen1)
                var oInputForTotalQty = this.getView().byId("TotalQty");
                oInputForTotalQty.setValue(totalSum)

            },
            ONSUMIT: function () {
                var oCommonModel = this.getOwnerComponent().getModel('oCommonModel').getProperty("/visible");
                if (oCommonModel === true) {
                    var oTableModel1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");
                    for (var i = 0; i < oTableModel1.length; i++) {
                        var k = i + 1;
                        var TargetQty = Number(oTableModel1[i].TargetQty);
                        var Grqty = Number(oTableModel1[i].Grqty);
                        var remqty = TargetQty - Grqty;
                        var ProdOrder = oTableModel1[i].ProdOrder;
                        var qty = 0;
                        for (var j = 0; j < oTableModel1.length; j++) {
                            if (ProdOrder === oTableModel1[j].ProdOrder) {
                                qty = Number(oTableModel1[j].Quantity) + qty;
                            }
                        }
                        if (qty > remqty) {
                            MessageBox.show("Quantity is Greater Than Remain Qty of this Beam No.=" + oTableModel1[i].Batch + " and Of Line No.=" + oTableModel1[i].sno, {
                                title: "Warning!!!!!!",
                                icon: MessageBox.Icon.ERROR
                            });
                            break;
                        }
                        else if (oTableModel1.length === k) {
                            this.ONSUMIT1();
                        }
                    }
                }
                else {
                    MessageBox.error("Wrong Submit");
                }

            },
            ONSUMIT1: function () {
                var oTableModel1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");

                for (var i = 0; i < oTableModel1.length; i++) {
                    var k = oTableModel1.length - 1;
                    if (oTableModel1[i].Quantity === "") {
                        MessageBox.error("Please fill the Quantity ");
                        break;
                    }
                    else if (oTableModel1[i].Batch === oTableModel1[i].RecBatch) {
                        MessageBox.error("Peice No. shouldn't same as Beam No." + oTableModel1[i].Batch);
                        break;
                    }
                    else if (oTableModel1[i].Quantity != "" && oTableModel1[i].NetWt === "") {
                        MessageBox.error("Please fill the Net Wt ");
                        break;
                    }
                    else if (k === i) {
                        this.oncompononet();
                    }

                }

            },
            oncompononet: function () {
                var oBusyDialog = new sap.m.BusyDialog({
                    title: "Fetching Data",
                    text: "Please wait",
                });
                oBusyDialog.open();
                var oTableModel1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");
                var order = [];
                for (var i = 0; i < oTableModel1.length; i++) {
                    var vorder = oTableModel1[i].ProdOrder;
                    order.push(vorder);
                }

                var oModel = this.getView().getModel();
                var Plant = this.getView().byId("Plant").getValue();

                var aFilters = order.map(function (value) {
                    return new sap.ui.model.Filter("OrderID", sap.ui.model.FilterOperator.EQ, value);
                });

                var oFilter = new sap.ui.model.Filter({
                    filters: aFilters,
                    and: false
                });
                var oFilter1 = new sap.ui.model.Filter("Plant", "EQ", Plant);
                var TableModel = this.getView().getModel("oFirstTableDataModel1");
                var aTableArr = TableModel.getProperty("/aFirstTableData1");


                oModel.read("/GREY_COMPONENT", {
                    filters: [oFilter, oFilter1],
                    urlParameters: { "$top": "500000" },
                    success: function (oresponse) {
                        if (oresponse.results.length === 0) {
                            oBusyDialog.close();
                            MessageBox.error("Data Not Found......");
                        }
                        else {
                            for (var i = 0; i < oresponse.results.length; i++) {
                                for (var j = 0; j < oTableModel1.length; j++) {
                                    if (oTableModel1[j].ProdOrder === oresponse.results[i].OrderID) {
                                        var qty = oresponse.results[i].ResvnItmRequiredQtyInBaseUnit - oresponse.results[i].ResvnItmWithdrawnQtyInBaseUnit;
                                        var firsttableqty = Number(oTableModel1[j].Quantity);
                                        var firstTargetQty = Number(oTableModel1[j].TargetQty);
                                        var bsqty = (Number(qty) * firsttableqty) / firstTargetQty;
                                        var obj = {
                                            sno: oTableModel1[j].sno,
                                            productionorder: oresponse.results[i].OrderID,
                                            material: oresponse.results[i].Product,
                                            description: oresponse.results[i].ProductDescription,
                                            loc: oresponse.results[i].StorageLocation,
                                            batch: oresponse.results[i].Batch,
                                            quantity: bsqty,
                                            targetquantity: oresponse.results[i].StockQty,
                                            unit: oresponse.results[i].BaseUnit,
                                            salesorder: oresponse.results[i].SalesOrder,
                                            soitem: oresponse.results[i].SalesOrderItem,
                                            ind: oresponse.results[i].SetNumber,

                                        }
                                        aTableArr.push(obj);
                                    }
                                }
                                TableModel.setProperty("/aFirstTableData1", aTableArr);
                                oBusyDialog.close();
                            }
                        }
                        this.getView().getModel("oCommonModel").setProperty("/visible", false);
                    }.bind(this),
                    error: function (error) {
                        oBusyDialog.close();
                        MessageBox.show("Data Not Read Successfully", {
                            title: "Warning!!!!!!",
                            icon: MessageBox.Icon.ERROR
                        });
                    }

                })
            },
            savedata1: function () {
                var oBusyDialog = new sap.m.BusyDialog({
                    title: "Loading",
                    text: "Please wait"
                });
                oBusyDialog.open();


                var Plant = this.getView().byId("Plant").getValue();
                var PostingDate = this.getView().byId("Fromdt").getValue();
                var Shift = this.getView().byId("Shift").getValue();
                var OperatorCode = this.getView().byId("OperatorCode").getValue();
                var TotalPieces = this.getView().byId("TotalPieces").getValue();
                var TotalQty = this.getView().byId("TotalQty").getValue();
                var TotalWeight = this.getView().byId("TotalWeight").getValue();
                if (PostingDate.length === 10) {
                    var yyyy = PostingDate.slice(0, 4);
                    var mm = PostingDate.slice(5, 7);
                    var dd = PostingDate.slice(8, 10);
                    var dte = yyyy + mm + dd;
                }
                else if (PostingDate.length === 9) {
                    var yyyy = PostingDate.slice(0, 4);
                    var mm = PostingDate.slice(5, 7);
                    if (mm.slice(1, 2) === '-') {
                        var mm = PostingDate.slice(5, 6);
                        mm = "0" + mm;
                        var dd = PostingDate.slice(7, 9);
                    }
                    else {
                        var mm = PostingDate.slice(5, 7);
                        var dd = PostingDate.slice(8, 9);
                        dd = "0" + dd;
                    }
                    var dte = yyyy + mm + dd;
                }
                else if (PostingDate.length === 8) {
                    var yyyy = PostingDate.slice(0, 4);
                    var mm = PostingDate.slice(5, 6);
                    mm = "0" + mm;
                    var dd = PostingDate.slice(7, 8);
                    dd = "0" + dd;
                    var dte = yyyy + mm + dd;
                }

                var PostingDate = dte;


                var table1 = this.getView().getModel("oFirstTableDataModel").getProperty("/aFirstTableData");
                var table2 = this.getView().getModel("oFirstTableDataModel1").getProperty("/aFirstTableData1");
                var aTableArr1 = [];
                for (var i = 0; i < table1.length; i++) {

                    if (table1[i].Batch != "") {
                        var tab1 = {
                            sno: String(table1[i].sno),
                            Batch: table1[i].Batch,
                            Partybeam: table1[i].Partybeam,
                            RecBatch: table1[i].RecBatch,
                            Quantity: table1[i].Quantity,
                            rollno: table1[i].rollno,
                            setno: table1[i].setno,
                            NetWt: table1[i].NetWt,
                            Loomno: table1[i].Loomno,
                            Material: table1[i].Material,
                            MaterialDec: table1[i].MaterialDec,
                            ProdOrder: table1[i].ProdOrder,
                            stdwt: table1[i].stdwt,
                            grossWt: table1[i].grossWt,
                            ironpipe: table1[i].ironpipe,
                            Remark: table1[i].Remark,
                            selvedge: table1[i].selvedge,
                            Sloc: table1[i].Sloc,
                            Uom: table1[i].Uom,
                            shadeno: table1[i].shadeno,
                            salorder: table1[i].salorder,
                            soitem: table1[i].soitem,
                            Pick: table1[i].Pick,
                            Partyname: table1[i].Partyname,
                            wtmtr: table1[i].wtmtr,
                        }
                        aTableArr1.push(tab1);

                    }
                }
                var aTableArr2 = [];
                for (var i = 0; i < table2.length; i++) {
                    var tab2 = {
                        SNO: String(table2[i].sno),
                        ProductionOrder: table2[i].productionorder,
                        Material: table2[i].material,
                        Description: table2[i].description,
                        Loc: table2[i].loc,
                        Batch: table2[i].batch,
                        Quantity: table2[i].quantity,
                        TargetQuantity: String(table2[i].targetquantity),
                        Unit: table2[i].unit,
                        SalesOrder: table2[i].salesorder,
                        SoItem: table2[i].soitem,
                        SetNumber: table2[i].ind

                    }
                    aTableArr2.push(tab2);

                }
                var tabledata1 = aTableArr2;
                var tabledata = aTableArr1;

                var url = "/sap/bc/http/sap/zpp_grey_ren_http?sap-client=080";
                $.ajax({
                    url: url,
                    type: "post",
                    data: JSON.stringify({
                        Plant,
                        date: PostingDate,
                        Shift,
                        OperatorCode,
                        TotalPieces,
                        TotalQty,
                        TotalWeight,
                        tabledata,
                        tabledata1

                    }),
                    contentType: "application/json; charset=utf-8",
                    traditional: true,
                    success: function (result) {
                        var meta = result.slice(0, 5);
                        var k = result.slice(3, 5);
                        if (k === "ERROR" || k === "Error") {
                            MessageBox.error(result);

                        }
                        // ADD BY ANSHUL CHECHANI
                        else if (meta === "GS261") {
                            var a = result.slice(6, 80);
                            var oCancel = {
                                "data": a
                            }
                            this.getView().setModel(new sap.ui.model.json.JSONModel(oCancel), "oCanceldata");
                            this.savedata2();
                        }
                        else {
                            MessageBox.show(result, {
                                onClose: function (oAction) {
                                    if (oAction === MessageBox.Action.OK) {
                                        window.location.reload();
                                    }
                                }
                            });
                            // ADD BY ANSHUL CHECHANI
                        }
                        oBusyDialog.close();
                    }.bind(this),
                    error: function (oresponse) {
                        MessageBox.show("Data Not Saved Successfully", {
                            title: "Warning!!!!!!",
                            icon: MessageBox.Icon.ERROR
                        });
                        oBusyDialog.close();
                    }
                });
            },
            // ADD BY ANSHUL CHECHANI
            savedata2: function () {
                var oBusyDialog = new sap.m.BusyDialog({
                    text: "Please wait"
                });
                oBusyDialog.open();

                var datacan = this.getView().getModel("oCanceldata").getProperty("/data");

                var url = "/sap/bc/http/sap/ZPP_GREY_GRN_101_CANCEL?";
                $.ajax({
                    type: "post",
                    url: url,
                    data: JSON.stringify({
                        datacan
                    }),
                    contentType: "application/json; charset=utf-8",
                    traditional: true,
                    success: function (data) {
                        oBusyDialog.close();
                        var meta = data.slice(0, 5);
                        var k = data.slice(8, 80);
                        if (meta === "ERROR") {
                            MessageBox.error(k);
                        }
                        else {
                            MessageBox.show(data, {
                                onClose: function (oAction) {
                                    if (oAction === MessageBox.Action.OK) {
                                        window.location.reload();
                                    }
                                }
                            });

                        }

                    }.bind(this),
                    error: function (error) {
                        oBusyDialog.close();
                        MessageBox.error(error);
                    }

                })
            },
            // ADD BY ANSHUL CHECHANI
            onValueHelpRequest: function (oEvent) {
                var Plant = this.getView().byId("Plant").getValue();
                var oView = this.getView();
                this.oSource = oEvent.getSource();
                this.sPath = oEvent.getSource().getBindingContext('oFirstTableDataModel').getPath();
                this.sPath1 = oEvent.getSource().getBindingContext('oFirstTableDataModel').getObject().Batch;
                this.sPath2 = oEvent.getSource().getBindingContext('oFirstTableDataModel').getObject().Remark;


                var sKey = this.oSource.getCustomData()[0].getKey();
                if (!this._pValueHelpDialog) {
                    this._pValueHelpDialog = Fragment.load({
                        id: oView.getId(),
                        name: "zproductionorder.fragments.VendorValueHelp",
                        controller: this
                    }).then(function (oValueHelpDialog) {
                        oView.addDependent(oValueHelpDialog);
                        return oValueHelpDialog;
                    });
                }
                this._pValueHelpDialog.then(function (oValueHelpDialog) {
                    // this._configValueHelpDialog(this.oSource);
                    var aNewArr = [];
                    var sInput = this.sPath1

                    var oModel = this.getView().getModel('oBatchData2').getProperty("/aData2");
                    oModel.map(function (items) {
                        if (items.Beamno === sInput && items.Plant === Plant) {
                            aNewArr.push(items)
                        }
                    })
                    this.getView().setModel(new sap.ui.model.json.JSONModel(), "BatchData")
                    this.getView().getModel("BatchData").setProperty("/aData", aNewArr)
                    if (sKey === 'VC') {
                        var oTemplate = new sap.m.StandardListItem({
                            title: "{BatchData>Beamno}",
                            description: "{BatchData>Selvedge}",
                            // info: "{BatchData>BatchF4QtY}" + " " + "{BatchData>lotno}",
                            // Plant: "{BatchData>Plant}",
                            // Beamno: "{BatchData>Beamno}",
                            type: "Active"
                        });
                        oValueHelpDialog.bindAggregation("items", {
                            path: 'BatchData>/aData',
                            template: oTemplate
                        });
                        oValueHelpDialog.setTitle("Select Batch");
                    }

                    oValueHelpDialog.open();
                }.bind(this));
            },
            _configValueHelpDialog: function (oSource) {
                var sInputValue = oSource.getBindingContext("oFirstTableDataModel").getObject().Batch,
                    oModel = this.getView().getModel('oBatchData1'),
                    sKey = oSource.getCustomData()[0].getKey();
                var aNewArr = []
                if (sKey === 'VC') {
                    var aData = oModel.getProperty("/aData1");
                    aData.map(function (items) {
                        if (items.Beamno === sInputValue) {
                            aNewArr.push(items)
                        }
                    })
                    aData.forEach(function (aNewArr) {
                        aNewArr.selected = (aNewArr.Beamno === sInputValue);
                    });
                    oModel.setProperty("/aData1", aData);
                }
            },
            onValueHelpDialogClose: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("selectedItem");
                var sPath = oEvent.getParameter("selectedContexts")[0].getPath();
                var oObject = oEvent.getParameter("selectedContexts")[0].getObject();
                // this.oSource = this.byId("productInput");
                if (!oSelectedItem) {
                    this.oSource.resetProperty("value");
                    return;
                }
                if (sPath.search('/aData1') != -1) {
                    // this.getView().getModel('oFirstTableDataModel').getProperty(this.sPath).selvedge = oObject.Selvedge;
                    this.getView().getModel('oFirstTableDataModel').getProperty(this.sPath).Remark = oObject.remark;
                    this.getView().getModel('oFirstTableDataModel').setProperty(this.sPath, this.getView().getModel('oFirstTableDataModel').getProperty(this.sPath));
                }
                else {
                    this.getView().getModel('oFirstTableDataModel').getProperty(this.sPath).Remark = oObject.remark;
                    this.getView().getModel('oFirstTableDataModel').setProperty(this.sPath, this.getView().getModel('oFirstTableDataModel').getProperty(this.sPath));
                }
                this.oSource.setValue(oSelectedItem.getDescription());
            },
        });
    });
