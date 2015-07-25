$(document).ready(function() {

    // ##################################################################################################################
    // ##### Sample1 - API method #####
    // ##################################################################################################################
    var myColorScheme = {
        navigationbar: {
            background: '#000',
            border: '0px dotted #555',
            color: '#ccc',
            colorHover: '#fff'
        },
        thumbnail: {
            background: '#000',
            border: '1px solid #000',
            labelBackground: 'transparent',
            labelOpacity: '0.8',
            titleColor: '#fff',
            descriptionColor: '#eee'
        }
    };
    var myColorSchemeViewer = {
        background: 'rgba(1, 1, 1, 0.75)',
        imageBorder: '12px solid #f8f8f8',
        imageBoxShadow: '#888 0px 0px 20px',
        barBackground: '#222',
        barBorder: '2px solid #111',
        barColor: '#eee',
        barDescriptionColor: '#aaa'
    };

    // custom thumbnail hover effect
    function myThumbnailInit($elt, item) {}
    function myThumbnailHoverInit($elt, item, data) {
        //$elt.find('.labelDescription').css({'opacity':'0'});
        var $subCon = $elt.find('.subcontainer');
        var th = $elt.outerHeight(true);
        var $iC = $elt.find('.imgContainer');
        var w = $iC.outerWidth(true) / 10;
        var h = $iC.outerHeight(true);
        for (var c = 0; c < 10; c++) {
            var s = 'rect(0px, ' + w * (c + 1) + 'px, ' + h + 'px, ' + w * c + 'px)';
            //var $t=$lI.clone().appendTo($subCon).css({'bottom':-(h+c*4), 'clip':s});
            $iC.clone().appendTo($elt.find('.subcontainer')).css({
                'bottom': 0,
                'scale': 1,
                'clip': s,
                'left': 0,
                'position': 'absolute'
            });
            //$t.css({'top':c*2});
        }
        $iC.remove();
    }

    function myThumbnailHover($elt, item, data) {
        //$elt.find('.labelDescription').delay(150)[data.animationEngine]({'opacity':'1'},400);
        //$elt.find('.labelDescription').delay(150).animate({'opacity':'1'},400);
        var w = $elt.find('.imgContainer').outerWidth(true) / 10;
        $elt.find('.imgContainer').each(function(index) {
            $(this)[data.animationEngine]({
                'left': ( - w * 10) + w * index * 3,
                'scale': 2
            },
            20000);
            //console.log( index*w + ' ' + index+ '-'+w );
        });
    }
    function myThumbnailHoverOut($elt, item, data) {
        //$elt.find('.labelDescription').animate({'opacity':'0'},300);
        var h = $elt.find('.labelImage').outerHeight(true);
        var w = $elt.find('.labelImage').outerWidth(true) / 10;
        $elt.find('.labelImage').each(function(index) {
            $(this)[data.animationEngine]({
                'bottom': -(h + index * 4)
            });
        });
    }

    // custom info button on viewer toolbar
    function myViewerInfo(item, data) {
        alert('Image URL: ' + item.thumbsrc);
    }

    jQuery("#nanoGallery1").nanoGallery({
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        items: [{
            src: 'demonstration/image_01.jpg',
            // image url
            srct: 'demonstration/image_01t.jpg',
            // thumbnail url
            title: 'image 1',
            // thumbnail title
            //title: '<a href="#">Test</a> image 1', 						        // thumbnail title
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title_FRD: 'image 1 (fr)',
            description_FR: 'description image 1 (fr)'
        },
        {
            src: 'demonstration/image_02.jpg',
            srct: 'demonstration/image_02t.jpg',
            title: 'image 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title_FR: 'image 2 (fr)',
            description_FR: 'description image 2 (fr)'
        },
        {
            src: 'demonstration/image_03.jpg',
            srct: 'demonstration/image_03t.jpg',
            title: 'image 3'
        }],
        thumbnailHoverEffect: [{
            name: 'imageScaleIn80'
        },
        {
            'name': 'descriptionAppear',
            'delay': 300
        },
        {
            'name': 'borderDarker'
        }],
        thumbnailLabel: {
            display: true,
            position: 'overImageOnBottom'
        },
        viewerDisplayLogo: true,
        //thumbnailInit:myThumbnailInit,
        //fnThumbnailHoverInit:myThumbnailHoverInit,
        //fnThumbnailHover:myThumbnailHover,
        //fnThumbnailHoverOut:myThumbnailHoverOut,
        theme: 'light',
        imageTransition: 'fade',
        fnViewerInfo: myViewerInfo,
        locationHash: false,
        viewerToolbar: {
            standard: 'minimizeButton , previousButton, pageCounter ,nextButton,playPauseButton,fullscreenButton,infoButton,linkOriginalButton,closeButton,label,custom1'
        },
        fnImgToolbarCustInit: function(elementName) {
            return ('<div>build</div>');
        },
        fnImgToolbarCustDisplay: function($elements, item, data) {
            $elements.eq(0).html('photo ID: ' + item.GetID() + '<a href="http://google.fr">Test</a>');
        },
        fnImgToolbarCustClick: function(elementName, $element, item, data) {
            alert(elementName);
        },
        viewer: 'fancybox',
        debugMode: true
    });

    // ##################################################################################################################
    // ##### Sample3 - Picasa/Google+ #####
    // ##################################################################################################################
    jQuery("#nanoGallery3").nanoGallery({
        thumbnailL1Width: '140C XS100 SM100',
        thumbnailL1Height: '140C XS100 SM100',
        thumbnailWidth: 'auto',
        thumbnailHeight: '200 XS80 SM150 LA250 XL290',

        userID: '109598374051516334426',
        //userID:'103482106723589181634', // --> Cyrilic
        kind: 'picasa',
        //maxItemsPerLine:3,
        //album: '5851968929721015169?authkey=CJSlhdKSgoiXtgE',
        //album: '5851968929721015169&authkey=Gv1sRgCJSlhdKSgoiXtgE',
        //album:'5856259539659194001',
        //openOnStart : '5856259539659194001',
        //openOnStart : '5856259539659194001/5856259543749603346',
        viewerFullscreen: false,
        photoSorting: 'random',
        locationHash: false,
        //blackList:'none',
        albumSorting: 'random',
        colorScheme: myColorScheme,
        galleryFullpageButton: true,
        thumbnailLabel: {
            display: false
        },
        thumbnailL1Label: {
            title: '%filenameNoExt',
            itemsCount: 'title',
            display: true
        },
        viewerDisplayLogo: true,
        photoSorting: 'titleDesc',
        thumbnailHoverEffect: [{
            'name': 'imageScale150',
            'duration': 500
        }],
        thumbnailL1HoverEffect: [{
            'name': 'labelOpacity50',
            'duration': 300,
            'delay': 500
        },
        {
            'name': 'imageScaleIn80',
            'duration': 500
        }]
        //thumbnailHoverEffect: [{'name':'imageScaleIn80','duration':300},{'name':'borderLighter'}]
    });
    jQuery('#btnPicasaOpen').on('click',
    function() {
        //jQuery("#nanoGallery3").nanoGallery('displayItem','111186676244625461692/6059759872735910226');
    });

    // ##################################################################################################################
    // ##### Sample3a - Picasa/Google+ #####
    // ##################################################################################################################
    jQuery("#nanoGallery3a").nanoGallery({
        thumbnailWidth: 200,
        thumbnailHeight: 150,
        userID: '109598374051516334426',
        kind: 'picasa',
        //maxItemsPerLine:3,
        //album: '5852572882905112961',
        //album:'5856259539659194001',
        //album:'5911347863561293937',
        galleryFullpageButton: true,
        galleryFullpageBgColor: '#fff',
        colorScheme: 'lightBackground',
        locationHash: false,
        viewerDisplayLogo: true,
        //thumbnailHoverEffect:[{'name':'labelOpacity50','duration':300, 'delay':500},{'name':'imageScaleIn80', 'duration':500}],
        thumbnailHoverEffect: [{
            'name': 'imageScaleIn80',
            'duration': 500
        }],
        theme: 'light',
        i18n: {
            'thumbnailImageDescription': 'View Photo',
            'thumbnailAlbumDescription': 'Open Album'
        },
        thumbnailLabel: {
            display: true,
            position: 'onBottom'
        },
        colorSchemeViewer: 'default',
        imageTransition: 'slideAppear',
        fnProcessData: fnDemopProcessData,
        // javascript custom extension
        fnViewerInfo: fnDemoViewerInfo,
        // javascript custom extension
        itemsSelectable: true
    });

    function fnDemopProcessData(item, kind, sourceData) {
        if (kind == 'picasa' && item.kind == 'image') {
            //console.dir(sourceData);
            item.customData.imgOriginalWidth = sourceData.gphoto$width.$t;
            item.customData.imgOriginalHeight = sourceData.gphoto$height.$t;
            var ex = {
                model: 'na',
                iso: 'na'
            }
            if (typeof sourceData.exif$tags !== "undefined") {
                if (typeof sourceData.exif$tags.exif$model !== "undefined" && typeof sourceData.exif$tags.exif$model.$t !== "undefined") {
                    ex.model = sourceData.exif$tags.exif$model.$t;
                }
            }
            item.customData.exif = ex;
        }
    }

    function fnDemoViewerInfo(item, data) {
        var s = 'camera: ' + item.customData.exif.model + ' / width: ' + item.customData.imgOriginalWidth + ' / height: ' + item.customData.imgOriginalHeight;
        alert(s);
    }

    jQuery('#btnReload').on('click',
    function() {
        jQuery('#nanoGallery3a').nanoGallery('reload');
    });
    jQuery('#btnCountSelected').on('click',
    function() {
        alert(jQuery('#nanoGallery3a').nanoGallery('getSelectedItems').length);
    });
    jQuery('#btnUnselect').on('click',
    function() {
        var items = jQuery('#nanoGallery3a').nanoGallery('getSelectedItems');
        jQuery('#nanoGallery3a').nanoGallery('unselectItems', items)
    });

    // ##################################################################################################################
    // ##### DEMO PANEL #####
    // ##################################################################################################################
    jQuery("#nanoGalleryAnimation1").nanoGalleryDemo({
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        itemsBaseURL: 'demonstration',
        viewerDisplayLogo: true
    });

});