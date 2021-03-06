﻿/*
    FingerEyes-Xr for HTML5
    A JavaScript library for building professional GIS System.
    http://www.gisdeveloper.co.kr / http://www.geoservice.co.kr
    (c) 2014 - 2018
    저작권자(Copyright)(주)지오서비스, GEOSERVICE, Inc
    라이선스 : LGPL
    상기 주석 제거는 저작권자의 권리관리정보 훼손으로 저작권을 침해하는 행위입니다.
*/

(function () {
	var r = new RegExp("(^|(.*?\\/))(Xr.js)(\\?|$)"),
    	s = document.getElementsByTagName('script'),
       	src, m, l = "";
            
	for(var i=0, len=s.length; i<len; i++) {
		src = s[i].getAttribute('src');
		if(src) {
        	m = src.match(r);
            if(m) {
            	l = m[1];
                break;
            }
        }
    }

    /*
        하단의 jsFiles 배열 요소에 대한 모든 js 파일은 GPL 라이선스를 따릅니다.
    */
	var jsFiles = 
		[
            // Base package
            'base/CommonStrings.js',
            'base/MouseActionEnum.js',
			'base/PointD.js',
			'base/MBR.js',
			'base/CoordMapper.js',
			'base/OperationHelper.js',
            'base/GeometryHelper.js',
            'base/UserModeEnum.js',
            'base/IMouseInteraction.js',
            'base/IKeyboardInteraction.js',
            'base/UserState.js',

            // UI and Managers
			'Map.js',
            'Events.js',
            'managers/UserControlManager.js',
			'managers/LayerManager.js',
            'managers/EditManager.js',

            // View package
            'view/Visibility.js',
            'view/IHitTest.js',
            'edit/ISnap.js',

			'view/layers/Layer.js',
			'view/layers/ILayer.js',
			'view/layers/TMSLayer/XYZLayer.js',
			'view/layers/TMSLayer/TileMapLayer.js',
			'view/layers/TMSLayer/TMSLevelData.js',
			'view/layers/TMSLayer/TMSConnectionRequest.js',
			'view/layers/TMSLayer/TMSLayer.js',
			
            'view/layers/CoordinateLayer/CoordinateLayer.js',
            'view/layers/CoordinateLayer/CoordinateQueryRequest.js',
			'view/layers/CoordinateLayer/ShapeMapLayer/ShapeMapLayer.js',
			'view/layers/CoordinateLayer/ShapeMapLayer/ShapeMapConnectionRequest.js',
			'view/layers/CoordinateLayer/ShapeMapLayer/ShapeMapQueryRequest.js',
			'view/layers/CoordinateLayer/WFSLayer/WFSLayer.js',
            'view/layers/CoordinateLayer/WFSLayer/WFSConnectionRequest.js',
            'view/layers/CoordinateLayer/WFSLayer/WFSQueryRequest.js',

            'view/layers/GraphicLayer/GraphicLayer.js',

            'view/layers/GridLayer/GridLayer.js',
            'view/layers/GridLayer/ColorTable.js',

            'view/layers/WMSLayer/WMSLayer.js',
            'view/layers/ImageLayer/ImageLayer.js',

            'view/label/Label.js',
            'view/label/formatter/ILabelFormatter.js',
            'view/label/formatter/ProgrammableLabelFormatter.js',
            'view/label/formatter/SingleValueLabelFormatter.js',
            'view/label/LabelDrawer.js',

            'view/symbol/PenSymbol.js',
			'view/symbol/BrushSymbol.js',
            'view/symbol/FontSymbol.js',
            'view/symbol/ShapeDrawSymbol.js',

            'view/symbol/marker/IMarkerSymbol.js',
            'view/symbol/marker/RectangleMarkerSymbol.js',
            'view/symbol/marker/CircleMarkerSymbol.js',
            'view/symbol/marker/ImageMarkerSymbol.js',
            'view/symbol/marker/TextMarkerSymbol.js',

            'view/theme/IShapeDrawTheme.js',
            'view/theme/ProgrammableShapeDrawTheme.js',
            'view/theme/DeferableShapeDrawTheme.js',
            'view/theme/DeferableLabelText.js',
            'view/theme/SimpleShapeDrawTheme.js',
            'view/theme/ILabelDrawTheme.js',
            'view/theme/ProgrammableLabelDrawTheme.js',
            'view/theme/SimpleLabelDrawTheme.js',
            
            // Extern Package
			'extern/jama/Matrix.js',
			'extern/jama/IOUtils.js',
			'extern/jama/EVDecomposition.js',
			'extern/jama/LUDecomposition.js',

            // Data Package
			'data/ShapeType.js',			
			'data/shaperow/ShapeRow.js',
			'data/ShapeRowSet.js',
			'data/shapedata/IShapeData.js',
			'data/shaperow/IShapeRow.js',
			'data/shapedata/PolygonShapeData.js',
            'data/shapedata/RectangleShapeData.js',
            'data/shapedata/EllipseShapeData.js',
			'data/shapedata/PolylineShapeData.js',
            'data/shapedata/PointShapeData.js',
			'data/shapedata/TextShapeData.js',
            'data/shapedata/LiveTextObjectShapeData.js',
            'data/shapedata/DecorationTextsShapeData.js',
            'data/shapedata/PieChartItemShapeData.js',

			'data/FieldType.js',
			'data/AttributeRowSet.js', 
			'data/FieldSet.js',
			'data/Field.js',

			'data/AttributeRow.js',
            'data/GraphicRowSet.js',
            'data/shaperow/PointShapeRow.js',
            'data/shaperow/PolygonShapeRow.js',
			'data/shaperow/PolylineShapeRow.js',
            'data/graphicrow/IGraphicRow.js',
            'data/graphicrow/GraphicRow.js',
            'data/graphicrow/PointGraphicRow.js',
            'data/graphicrow/PolylineGraphicRow.js',
            'data/graphicrow/PolygonGraphicRow.js',
            'data/graphicrow/RectangleGraphicRow.js',
            'data/graphicrow/EllipseGraphicRow.js',
            'data/graphicrow/TextGraphicRow.js',
            'data/graphicrow/LiveTextObjectGraphicRow.js',
            'data/graphicrow/DecorationTextsGraphicRow.js',
            'data/graphicrow/PieChartItemGraphicRow.js',

            // Edit Package
            'edit/sketch/Sketch.js',
            'edit/sketch/ISketch.js',
            'edit/sketch/PolygonSketch.js',
            'edit/sketch/PolylineSketch.js',
            'edit/sketch/PointSketch.js',
            'edit/sketch/TextSketch.js',
            'edit/sketch/RectangleSketch.js',
            'edit/sketch/EllipseSketch.js',

            'edit/command/ICommand.js',
            'edit/command/Command.js',
            'edit/command/NewCommand.js',
            'edit/command/MoveCommand.js',
            'edit/command/MoveControlPointCommand.js',
            'edit/command/UpdateControlPointCommand.js',
            'edit/command/RemoveCommand.js',
            'edit/command/RemoveVertexCommand.js',
            'edit/command/AddVertexCommand.js',
            'edit/command/AddPartCommand.js',
            'edit/command/RemovePartCommand.js',
            'edit/command/GroupCommand.js',
            'edit/EditHistory.js',
            'edit/SnapManager.js',

            // UI Package
            'ui/IUserControl.js',
            'ui/UserControl.js',
            'ui/ScaleBarControl.js',
            'ui/IndexMapControl.js',
            'ui/ZoomLevelControl.js',
            'ui/InfoWindowControl.js',
            'ui/TextControl.js',
            'ui/HotSpotControl.js'
		];
		
	var scriptTags = new Array(jsFiles.length);

	var host = l + "lib/";

    window.__fingerEyes_Xr_background_image_url = host + "bg.png";

	scriptTags.push("<link rel='stylesheet' type='text/css' href='" + l + "Xr.css'>");

    for (var i = 0, len = jsFiles.length; i < len; i++) {
        scriptTags.push("<script src='" + host + jsFiles[i] + "'></script>");
		//scriptTags.push("<script src='" + host + jsFiles[i] + "' defer></script>"); 
	}

	if (scriptTags.length > 0) {
		document.write(scriptTags.join(""));
	}

	window.__XR_CLASS_LOADING_TIME__ = "XrClassLoadingTime",

    window.g_MSF = 0.7661204512466478;

	window.Xr = 
	{
		LICENSE: 'GPL',
		VERSION: '1.0',

		DEVELOPERS: 
		[
			{ name: 'Kim Hyoung-Jun', nickName: 'Dip2K', eMail: 'hjkim@geoservice.co.kr', homepage: 'www.gisdeveloper.co.kr' }
		],
		
		Class: function(x) {
			var classname = x.name;

			var superclass = x.extend || Object;
			var constructor = x.construct || function() {};
			var methods = x.methods || {};
			var statics = x.statics || {};
			var requires = x.requires || [];

			var proto = new superclass(__XR_CLASS_LOADING_TIME__);

			for(var p in proto) if(proto.hasOwnProperty(p)) delete proto[p];

			proto.constructor = constructor;
			proto.superclass = superclass;
			proto.classname = classname; 
			constructor.prototype = proto;

			for (var p in methods) {
			    proto[p] = methods[p];
			}

			for (var p in statics) constructor[p] = statics[p];

			for(var i=0; i<requires.length; i++) {
				var c = requires[i];
				for(var p in c.prototype) {
					if(typeof c.prototype[p] != "function" || p == "constructor" || p == "superclass") continue;

					if(p in proto && typeof proto[p] == "function" && proto[p].length == c.prototype[p].length) continue;

				    //  UserControlManager에서 문제가 발생하는데, IMouseInteraction에 count 함수를 추가하지 않았는데, 
					// 추가 되어 있음으로 해서 발생함. 문제 발생시 아래의 코드(throw 문)를 주석으로 처리할 것.
				    //*   
				    //alert("is p in proto :" + (p in proto));
					//alert("typeof proto[p] is function: " + (typeof proto[p] == "function"));
					//alert(proto[p].length + " =? " + c.prototype[p].length + " : " + (proto[p].length == c.prototype[p].length));
					//alert(proto[p]);
					//alert(c.prototype[p]);
					//alert(c);
					throw new Error(classname + " class requires " + p + " method.");
                    //*/
				}
			}

			return constructor;
		} 
	};

	window.Xr.rasterOperatorsPath = l + "plugin/"
	//window.Xr.rasterOperatorsPath = host + "view/layers/GridLayer/operators/"
})();
