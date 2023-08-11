import React from "react";
import * as Icon from "bu2-sax-icons";

export interface IconSectionProps {
  title: string;
  icons: IconProps[];
}
export interface IconProps {
  name: string;
  icon: React.ReactNode;
}
export const iconSections: IconSectionProps[] = [
  {
    title: "Money",
    icons: [
      {
        name: "WalletAddOutlined",
        icon: <Icon.WalletAddOutlined />,
      },
      {
        name: "ReceiptItemOutlined",
        icon: <Icon.ReceiptItemOutlined />,
      },
      {
        name: "EmptyWalletOutlined",
        icon: <Icon.EmptyWalletOutlined />,
      },
      {
        name: "WalletCheckOutlined",
        icon: <Icon.WalletCheckOutlined />,
      },
      {
        name: "ReceiptDiscountOutlined",
        icon: <Icon.ReceiptDiscountOutlined />,
      },
      {
        name: "EmptyWalletRemoveOutlined",
        icon: <Icon.EmptyWalletRemoveOutlined />,
      },
      {
        name: "EmptyWalletAddOutlined",
        icon: <Icon.EmptyWalletAddOutlined />,
      },
      {
        name: "ReceiptMinusOutlined",
        icon: <Icon.ReceiptMinusOutlined />,
      },
      {
        name: "WalletSearchOutlined",
        icon: <Icon.WalletSearchOutlined />,
      },
      {
        name: "Strongbox2Outlined",
        icon: <Icon.Strongbox2Outlined />,
      },
      {
        name: "EmptyWalletTickOutlined",
        icon: <Icon.EmptyWalletTickOutlined />,
      },
      {
        name: "ReceiptAddOutlined",
        icon: <Icon.ReceiptAddOutlined />,
      },
      {
        name: "MoneyOutlined",
        icon: <Icon.MoneyOutlined />,
      },
      {
        name: "EmptyWalletTimeOutlined",
        icon: <Icon.EmptyWalletTimeOutlined />,
      },
      {
        name: "TransactionMinusOutlined",
        icon: <Icon.TransactionMinusOutlined />,
      },
      {
        name: "Money2Outlined",
        icon: <Icon.Money2Outlined />,
      },
      {
        name: "EmptyWalletChangeOutlined",
        icon: <Icon.EmptyWalletChangeOutlined />,
      },
      {
        name: "Money3Outlined",
        icon: <Icon.Money3Outlined />,
      },
      {
        name: "PercentageSquareOutlined",
        icon: <Icon.PercentageSquareOutlined />,
      },
      {
        name: "Money4Outlined",
        icon: <Icon.Money4Outlined />,
      },
      {
        name: "ChartSquareOutlined",
        icon: <Icon.ChartSquareOutlined />,
      },
      {
        name: "MoneysOutlined",
        icon: <Icon.MoneysOutlined />,
      },
      {
        name: "CoinOutlined",
        icon: <Icon.CoinOutlined />,
      },
      {
        name: "ReceiptEditOutlined",
        icon: <Icon.ReceiptEditOutlined />,
      },
      {
        name: "MoneyTickOutlined",
        icon: <Icon.MoneyTickOutlined />,
      },
      {
        name: "DiscountShapeOutlined",
        icon: <Icon.DiscountShapeOutlined />,
      },
      {
        name: "ReceiptSearchOutlined",
        icon: <Icon.ReceiptSearchOutlined />,
      },
      {
        name: "MoneyAddOutlined",
        icon: <Icon.MoneyAddOutlined />,
      },
      {
        name: "ConvertCardOutlined",
        icon: <Icon.ConvertCardOutlined />,
      },
      {
        name: "DiscountCircleOutlined",
        icon: <Icon.DiscountCircleOutlined />,
      },
      {
        name: "Wallet2Outlined",
        icon: <Icon.Wallet2Outlined />,
      },
      {
        name: "MoneyRemoveOutlined",
        icon: <Icon.MoneyRemoveOutlined />,
      },
      {
        name: "CardRemoveOutlined",
        icon: <Icon.CardRemoveOutlined />,
      },
      {
        name: "CardsOutlined",
        icon: <Icon.CardsOutlined />,
      },
      {
        name: "MoneyForbiddenOutlined",
        icon: <Icon.MoneyForbiddenOutlined />,
      },
      {
        name: "Wallet3Outlined",
        icon: <Icon.Wallet3Outlined />,
      },
      {
        name: "CardTickOutlined",
        icon: <Icon.CardTickOutlined />,
      },
      {
        name: "Receipt2Outlined",
        icon: <Icon.Receipt2Outlined />,
      },
      {
        name: "ReceiptOutlined",
        icon: <Icon.ReceiptOutlined />,
      },
      {
        name: "MoneyChangeOutlined",
        icon: <Icon.MoneyChangeOutlined />,
      },
      {
        name: "WalletRemoveOutlined",
        icon: <Icon.WalletRemoveOutlined />,
      },
      {
        name: "MoneyTimeOutlined",
        icon: <Icon.MoneyTimeOutlined />,
      },
      {
        name: "ReceiptTextOutlined",
        icon: <Icon.ReceiptTextOutlined />,
      },
      {
        name: "StrongboxOutlined",
        icon: <Icon.StrongboxOutlined />,
      },
      {
        name: "WalletOutlined",
        icon: <Icon.WalletOutlined />,
      },
      {
        name: "SecurityCardOutlined",
        icon: <Icon.SecurityCardOutlined />,
      },
      {
        name: "MoneyReciveOutlined",
        icon: <Icon.MoneyReciveOutlined />,
      },
      {
        name: "MoneySendOutlined",
        icon: <Icon.MoneySendOutlined />,
      },
      {
        name: "ArchiveOutlined",
        icon: <Icon.ArchiveOutlined />,
      },
      {
        name: "TagOutlined",
        icon: <Icon.TagOutlined />,
      },
      {
        name: "Tag2Outlined",
        icon: <Icon.Tag2Outlined />,
      },
      {
        name: "Coin1Outlined",
        icon: <Icon.Coin1Outlined />,
      },
      {
        name: "DocumentOutlined",
        icon: <Icon.DocumentOutlined />,
      },
      {
        name: "Wallet1Outlined",
        icon: <Icon.Wallet1Outlined />,
      },
      {
        name: "CardAddOutlined",
        icon: <Icon.CardAddOutlined />,
      },
      {
        name: "CardRemove1Outlined",
        icon: <Icon.CardRemove1Outlined />,
      },
      {
        name: "CardTick1Outlined",
        icon: <Icon.CardTick1Outlined />,
      },
      {
        name: "CardSlashOutlined",
        icon: <Icon.CardSlashOutlined />,
      },
      {
        name: "CardPosOutlined",
        icon: <Icon.CardPosOutlined />,
      },
      {
        name: "CardOutlined",
        icon: <Icon.CardOutlined />,
      },
      {
        name: "CardReceiveOutlined",
        icon: <Icon.CardReceiveOutlined />,
      },
      {
        name: "CardSendOutlined",
        icon: <Icon.CardSendOutlined />,
      },
      {
        name: "CardEditOutlined",
        icon: <Icon.CardEditOutlined />,
      },
      {
        name: "WalletMinusOutlined",
        icon: <Icon.WalletMinusOutlined />,
      },
      {
        name: "WalletAdd1Outlined",
        icon: <Icon.WalletAdd1Outlined />,
      },
      {
        name: "DollarSquareOutlined",
        icon: <Icon.DollarSquareOutlined />,
      },
      {
        name: "FrameOutlined",
        icon: <Icon.DollarCircleOutlined />,
      },
      {
        name: "Receipt1Outlined",
        icon: <Icon.Receipt1Outlined />,
      },
      {
        name: "ReceiptDisscountOutlined",
        icon: <Icon.ReceiptDisscountOutlined />,
      },
      {
        name: "TicketOutlined",
        icon: <Icon.TicketOutlined />,
      },
      {
        name: "TicketStarOutlined",
        icon: <Icon.TicketStarOutlined />,
      },
      {
        name: "TicketExpiredOutlined",
        icon: <Icon.TicketExpiredOutlined />,
      },
      {
        name: "Ticket2Outlined",
        icon: <Icon.Ticket2Outlined />,
      },
      {
        name: "TicketDiscountOutlined",
        icon: <Icon.TicketDiscountOutlined />,
      },
      {
        name: "MathOutlined",
        icon: <Icon.MathOutlined />,
      },
    ],
  },
  {
    title: "Video, Audio, Image",
    icons: [
      {
        name: "MicrophoneOutlined",
        icon: <Icon.MicrophoneOutlined />,
      },
      {
        name: "MicrophoneSlashOutlined",
        icon: <Icon.MicrophoneSlashOutlined />,
      },
      {
        name: "Microphone2Outlined",
        icon: <Icon.Microphone2Outlined />,
      },
      {
        name: "MicrophoneSlash1Outlined",
        icon: <Icon.MicrophoneSlash1Outlined />,
      },
      {
        name: "VolumeCrossOutlined",
        icon: <Icon.VolumeCrossOutlined />,
      },
      {
        name: "VolumeSlashOutlined",
        icon: <Icon.VolumeSlashOutlined />,
      },
      {
        name: "VolumeUpOutlined",
        icon: <Icon.VolumeUpOutlined />,
      },
      {
        name: "VolumeLowOutlined",
        icon: <Icon.VolumeLowOutlined />,
      },
      {
        name: "VolumeLow1Outlined",
        icon: <Icon.VolumeLow1Outlined />,
      },
      {
        name: "VolumeHighOutlined",
        icon: <Icon.VolumeHighOutlined />,
      },
      {
        name: "VolumeMuteOutlined",
        icon: <Icon.VolumeMuteOutlined />,
      },
      {
        name: "VideoOutlined",
        icon: <Icon.VideoOutlined />,
      },
      {
        name: "VideoSlashOutlined",
        icon: <Icon.VideoSlashOutlined />,
      },
      {
        name: "VideoSquareOutlined",
        icon: <Icon.VideoSquareOutlined />,
      },
      {
        name: "VideoCircleOutlined",
        icon: <Icon.VideoCircleOutlined />,
      },
      {
        name: "GalleryOutlined",
        icon: <Icon.GalleryOutlined />,
      },
      {
        name: "GalleryFavoriteOutlined",
        icon: <Icon.GalleryFavoriteOutlined />,
      },
      {
        name: "GallerySlashOutlined",
        icon: <Icon.GallerySlashOutlined />,
      },
      {
        name: "GalleryTickOutlined",
        icon: <Icon.GalleryTickOutlined />,
      },
      {
        name: "GalleryImportOutlined",
        icon: <Icon.GalleryImportOutlined />,
      },
      {
        name: "GalleryExportOutlined",
        icon: <Icon.GalleryExportOutlined />,
      },
      {
        name: "GalleryAddOutlined",
        icon: <Icon.GalleryAddOutlined />,
      },
      {
        name: "GalleryRemoveOutlined",
        icon: <Icon.GalleryRemoveOutlined />,
      },
      {
        name: "GalleryEditOutlined",
        icon: <Icon.GalleryEditOutlined />,
      },
      {
        name: "ImageOutlined",
        icon: <Icon.ImageOutlined />,
      },
      {
        name: "ScreenMirroringOutlined",
        icon: <Icon.ScreenMirroringOutlined />,
      },
      {
        name: "CameraOutlined",
        icon: <Icon.CameraOutlined />,
      },
      {
        name: "CameraSlashOutlined",
        icon: <Icon.CameraSlashOutlined />,
      },
      {
        name: "PlayOutlined",
        icon: <Icon.PlayOutlined />,
      },
      {
        name: "RecordOutlined",
        icon: <Icon.RecordOutlined />,
      },
      {
        name: "StopOutlined",
        icon: <Icon.StopOutlined />,
      },
      {
        name: "MusicnoteOutlined",
        icon: <Icon.MusicnoteOutlined />,
      },
      {
        name: "MusicOutlined",
        icon: <Icon.MusicOutlined />,
      },
      {
        name: "VideoVerticalOutlined",
        icon: <Icon.VideoVerticalOutlined />,
      },
      {
        name: "VideoHorizontalOutlined",
        icon: <Icon.VideoHorizontalOutlined />,
      },
      {
        name: "VideoPlayOutlined",
        icon: <Icon.VideoPlayOutlined />,
      },
      {
        name: "SubtitleOutlined",
        icon: <Icon.SubtitleOutlined />,
      },
      {
        name: "PlayCircleOutlined",
        icon: <Icon.PlayCircleOutlined />,
      },
      {
        name: "RecordCircleOutlined",
        icon: <Icon.RecordCircleOutlined />,
      },
      {
        name: "StopCircleOutlined",
        icon: <Icon.StopCircleOutlined />,
      },
      {
        name: "PauseCircleOutlined",
        icon: <Icon.PauseCircleOutlined />,
      },
      {
        name: "PauseOutlined",
        icon: <Icon.PauseOutlined />,
      },
      {
        name: "ScissorOutlined",
        icon: <Icon.ScissorOutlined />,
      },
      {
        name: "BackwardOutlined",
        icon: <Icon.BackwardOutlined />,
      },
      {
        name: "ForwardOutlined",
        icon: <Icon.ForwardOutlined />,
      },
      {
        name: "PreviousOutlined",
        icon: <Icon.PreviousOutlined />,
      },
      {
        name: "NextOutlined",
        icon: <Icon.NextOutlined />,
      },
      {
        name: "RadioOutlined",
        icon: <Icon.RadioOutlined />,
      },
      {
        name: "MusicCircleOutlined",
        icon: <Icon.MusicCircleOutlined />,
      },
      {
        name: "PlayCricleOutlined",
        icon: <Icon.PlayCricleOutlined />,
      },
      {
        name: "PlayRemoveOutlined",
        icon: <Icon.PlayRemoveOutlined />,
      },
      {
        name: "PlayAddOutlined",
        icon: <Icon.PlayAddOutlined />,
      },
      {
        name: "Backward5SecondsOutlined",
        icon: <Icon.Backward5SecondsOutlined />,
      },
      {
        name: "Backward10SecondsOutlined",
        icon: <Icon.Backward10SecondsOutlined />,
      },
      {
        name: "Backward15SecondsOutlined",
        icon: <Icon.Backward15SecondsOutlined />,
      },
      {
        name: "Forward5SecondsOutlined",
        icon: <Icon.Forward5SecondsOutlined />,
      },
      {
        name: "Forward10SecondsOutlined",
        icon: <Icon.Forward10SecondsOutlined />,
      },
      {
        name: "Forward15SecondsOutlined",
        icon: <Icon.Forward15SecondsOutlined />,
      },
      {
        name: "MusicPlaylistOutlined",
        icon: <Icon.MusicPlaylistOutlined />,
      },
      {
        name: "MusicFilterOutlined",
        icon: <Icon.MusicFilterOutlined />,
      },
      {
        name: "MusicDashboardOutlined",
        icon: <Icon.MusicDashboardOutlined />,
      },
      {
        name: "MusicSquareRemoveOutlined",
        icon: <Icon.MusicSquareRemoveOutlined />,
      },
      {
        name: "MusicSquareAddOutlined",
        icon: <Icon.MusicSquareAddOutlined />,
      },
      {
        name: "MusicSquareSearchOutlined",
        icon: <Icon.MusicSquareSearchOutlined />,
      },
      {
        name: "RepeateMusicOutlined",
        icon: <Icon.RepeateMusicOutlined />,
      },
      {
        name: "RepeateOneOutlined",
        icon: <Icon.RepeateOneOutlined />,
      },
      {
        name: "ShuffleOutlined",
        icon: <Icon.ShuffleOutlined />,
      },
      {
        name: "DevicesOutlined",
        icon: <Icon.DevicesOutlined />,
      },
      {
        name: "MusicLibrary2Outlined",
        icon: <Icon.MusicLibrary2Outlined />,
      },
      {
        name: "MusicSquareOutlined",
        icon: <Icon.MusicSquareOutlined />,
      },
      {
        name: "AudioSquareOutlined",
        icon: <Icon.AudioSquareOutlined />,
      },
      {
        name: "NoteSquareOutlined",
        icon: <Icon.NoteSquareOutlined />,
      },
      {
        name: "MiniMusicSqaureOutlined",
        icon: <Icon.MiniMusicSqaureOutlined />,
      },
      {
        name: "VideoAddOutlined",
        icon: <Icon.VideoAddOutlined />,
      },
      {
        name: "VideoRemoveOutlined",
        icon: <Icon.VideoRemoveOutlined />,
      },
      {
        name: "VideoTickOutlined",
        icon: <Icon.VideoTickOutlined />,
      },
      {
        name: "VideoTimeOutlined",
        icon: <Icon.VideoTimeOutlined />,
      },
      {
        name: "VideoOctagonOutlined",
        icon: <Icon.VideoOctagonOutlined />,
      },
      {
        name: "VoiceSquareOutlined",
        icon: <Icon.VoiceSquareOutlined />,
      },
      {
        name: "VoiceCricleOutlined",
        icon: <Icon.VoiceCricleOutlined />,
      },
      {
        name: "MaximizeCircleOutlined",
        icon: <Icon.MaximizeCircleOutlined />,
      },
    ],
  },
  {
    title: "Emails, Messages",
    icons: [
      {
        name: "DirectboxDefaultOutlined",
        icon: <Icon.DirectboxDefaultOutlined />,
      },
      {
        name: "DirectboxNotifOutlined",
        icon: <Icon.DirectboxNotifOutlined />,
      },
      {
        name: "DirectboxReceiveOutlined",
        icon: <Icon.DirectboxReceiveOutlined />,
      },
      {
        name: "DirectboxSendOutlined",
        icon: <Icon.DirectboxSendOutlined />,
      },
      {
        name: "DirectNormalOutlined",
        icon: <Icon.DirectNormalOutlined />,
      },
      {
        name: "DirectOutlined",
        icon: <Icon.DirectOutlined />,
      },
      {
        name: "DirectNotificationOutlined",
        icon: <Icon.DirectNotificationOutlined />,
      },
      {
        name: "DirectInboxOutlined",
        icon: <Icon.DirectInboxOutlined />,
      },
      {
        name: "DirectSendOutlined",
        icon: <Icon.DirectSendOutlined />,
      },
      {
        name: "MessageOutlined",
        icon: <Icon.MessageOutlined />,
      },
      {
        name: "MessageFavoriteOutlined",
        icon: <Icon.MessageFavoriteOutlined />,
      },
      {
        name: "MessageNotifOutlined",
        icon: <Icon.MessageNotifOutlined />,
      },
      {
        name: "MessageSearchOutlined",
        icon: <Icon.MessageSearchOutlined />,
      },
      {
        name: "MessageText1Outlined",
        icon: <Icon.MessageText1Outlined />,
      },
      {
        name: "DeviceMessageOutlined",
        icon: <Icon.DeviceMessageOutlined />,
      },
      {
        name: "MessagesOutlined",
        icon: <Icon.MessagesOutlined />,
      },
      {
        name: "Messages2Outlined",
        icon: <Icon.Messages2Outlined />,
      },
      {
        name: "Messages3Outlined",
        icon: <Icon.Messages3Outlined />,
      },
      {
        name: "SmsOutlined",
        icon: <Icon.SmsOutlined />,
      },
      {
        name: "SmsTrackingOutlined",
        icon: <Icon.SmsTrackingOutlined />,
      },
      {
        name: "SmsNotificationOutlined",
        icon: <Icon.SmsNotificationOutlined />,
      },
      {
        name: "SmsEditOutlined",
        icon: <Icon.SmsEditOutlined />,
      },
      {
        name: "SmsStarOutlined",
        icon: <Icon.SmsStarOutlined />,
      },
      {
        name: "SmsSearchOutlined",
        icon: <Icon.SmsSearchOutlined />,
      },
      {
        name: "MessageRemoveOutlined",
        icon: <Icon.MessageRemoveOutlined />,
      },
      {
        name: "MessageAddOutlined",
        icon: <Icon.MessageAddOutlined />,
      },
      {
        name: "MessageTickOutlined",
        icon: <Icon.MessageTickOutlined />,
      },
      {
        name: "MessageTimeOutlined",
        icon: <Icon.MessageTimeOutlined />,
      },
      {
        name: "Message2Outlined",
        icon: <Icon.Message2Outlined />,
      },
      {
        name: "Messages1Outlined",
        icon: <Icon.Messages1Outlined />,
      },
      {
        name: "MessageCircleOutlined",
        icon: <Icon.MessageCircleOutlined />,
      },
      {
        name: "MessageSquareOutlined",
        icon: <Icon.MessageSquareOutlined />,
      },
      {
        name: "MessageTextOutlined",
        icon: <Icon.MessageTextOutlined />,
      },
      {
        name: "MessageMinusOutlined",
        icon: <Icon.MessageMinusOutlined />,
      },
      {
        name: "MessageAdd1Outlined",
        icon: <Icon.MessageAdd1Outlined />,
      },
      {
        name: "MessageEditOutlined",
        icon: <Icon.MessageEditOutlined />,
      },
    ],
  },
  {
    title: "Type, Paragraph, Character",
    icons: [
      {
        name: "TextalignLeftOutlined",
        icon: <Icon.TextalignLeftOutlined />,
      },
      {
        name: "TextalignCenterOutlined",
        icon: <Icon.TextalignCenterOutlined />,
      },
      {
        name: "TextalignRightOutlined",
        icon: <Icon.TextalignRightOutlined />,
      },
      {
        name: "TextalignJustifyrightOutlined",
        icon: <Icon.TextalignJustifyrightOutlined />,
      },
      {
        name: "TextalignJustifycenterOutlined",
        icon: <Icon.TextalignJustifycenterOutlined />,
      },
      {
        name: "TextalignJustifyleftOutlined",
        icon: <Icon.TextalignJustifyleftOutlined />,
      },
      {
        name: "FirstlineOutlined",
        icon: <Icon.FirstlineOutlined />,
      },
      {
        name: "Paperclip2Outlined",
        icon: <Icon.Paperclip2Outlined />,
      },
      {
        name: "PaperclipOutlined",
        icon: <Icon.PaperclipOutlined />,
      },
      {
        name: "LinkOutlined",
        icon: <Icon.LinkOutlined />,
      },
      {
        name: "Link21Outlined",
        icon: <Icon.Link21Outlined />,
      },
      {
        name: "Link1Outlined",
        icon: <Icon.Link1Outlined />,
      },
      {
        name: "Link2Outlined",
        icon: <Icon.Link2Outlined />,
      },
      {
        name: "TextBlockOutlined",
        icon: <Icon.TextBlockOutlined />,
      },
      {
        name: "TextItalicOutlined",
        icon: <Icon.TextItalicOutlined />,
      },
      {
        name: "TextOutlined",
        icon: <Icon.TextOutlined />,
      },
      {
        name: "SmallcapsOutlined",
        icon: <Icon.SmallcapsOutlined />,
      },
      {
        name: "TextBoldOutlined",
        icon: <Icon.TextBoldOutlined />,
      },
      {
        name: "TextUnderlineOutlined",
        icon: <Icon.TextUnderlineOutlined />,
      },
      {
        name: "PharagraphspacingOutlined",
        icon: <Icon.PharagraphspacingOutlined />,
      },
      {
        name: "MaximizeOutlined",
        icon: <Icon.MaximizeOutlined />,
      },
      {
        name: "EraserOutlined",
        icon: <Icon.EraserOutlined />,
      },
      {
        name: "AttachSquareOutlined",
        icon: <Icon.AttachSquareOutlined />,
      },
      {
        name: "AttachCircleOutlined",
        icon: <Icon.AttachCircleOutlined />,
      },
      {
        name: "QuoteUpOutlined",
        icon: <Icon.QuoteUpOutlined />,
      },
      {
        name: "QuoteDownOutlined",
        icon: <Icon.QuoteDownOutlined />,
      },
      {
        name: "QuoteUpSquareOutlined",
        icon: <Icon.QuoteUpSquareOutlined />,
      },
      {
        name: "QuoteDownSquareOutlined",
        icon: <Icon.QuoteDownSquareOutlined />,
      },
      {
        name: "QuoteDownCircleOutlined",
        icon: <Icon.QuoteDownCircleOutlined />,
      },
      {
        name: "QuoteUpCircleOutlined",
        icon: <Icon.QuoteUpCircleOutlined />,
      },
      {
        name: "LinkSquareOutlined",
        icon: <Icon.LinkSquareOutlined />,
      },
      {
        name: "LinkCircleOutlined",
        icon: <Icon.LinkCircleOutlined />,
      },
      {
        name: "TranslateOutlined",
        icon: <Icon.TranslateOutlined />,
      },
      {
        name: "LanguageSquareOutlined",
        icon: <Icon.LanguageSquareOutlined />,
      },
      {
        name: "LanguageCircleOutlined",
        icon: <Icon.LanguageCircleOutlined />,
      },
    ],
  },
  {
    title: "Weather",
    icons: [
      {
        name: "MoonOutlined",
        icon: <Icon.MoonOutlined />,
      },
      {
        name: "SunOutlined",
        icon: <Icon.SunOutlined />,
      },
      {
        name: "CloudOutlined",
        icon: <Icon.CloudOutlined />,
      },
      {
        name: "CloudPlusOutlined",
        icon: <Icon.CloudPlusOutlined />,
      },
      {
        name: "CloudMinusOutlined",
        icon: <Icon.CloudMinusOutlined />,
      },
      {
        name: "CloudCrossOutlined",
        icon: <Icon.CloudCrossOutlined />,
      },
      {
        name: "CloudSunnyOutlined",
        icon: <Icon.CloudSunnyOutlined />,
      },
      {
        name: "CloudNotifOutlined",
        icon: <Icon.CloudNotifOutlined />,
      },
      {
        name: "CloudDrizzleOutlined",
        icon: <Icon.CloudDrizzleOutlined />,
      },
      {
        name: "CloudSnowOutlined",
        icon: <Icon.CloudSnowOutlined />,
      },
      {
        name: "CloudLightningOutlined",
        icon: <Icon.CloudLightningOutlined />,
      },
      {
        name: "flashOutlined",
        icon: <Icon.FlashOutlined />,
      },
      {
        name: "DropOutlined",
        icon: <Icon.DropOutlined />,
      },
      {
        name: "WindOutlined",
        icon: <Icon.WindOutlined />,
      },
      {
        name: "Wind2Outlined",
        icon: <Icon.Wind2Outlined />,
      },
      {
        name: "CloudFogOutlined",
        icon: <Icon.CloudFogOutlined />,
      },
      {
        name: "SunFogOutlined",
        icon: <Icon.SunFogOutlined />,
      },
      {
        name: "Sun1Outlined",
        icon: <Icon.Sun1Outlined />,
      },
    ],
  },
  {
    title: "Files",
    icons: [
      {
        name: "folderOutlined",
        icon: <Icon.FolderOutlined />,
      },
      {
        name: "folderCrossOutlined",
        icon: <Icon.FolderCrossOutlined />,
      },
      {
        name: "folderAddOutlined",
        icon: <Icon.FolderAddOutlined />,
      },
      {
        name: "folderMinusOutlined",
        icon: <Icon.FolderMinusOutlined />,
      },
      {
        name: "folderFavoriteOutlined",
        icon: <Icon.FolderFavoriteOutlined />,
      },
      {
        name: "folder2Outlined",
        icon: <Icon.Folder2Outlined />,
      },
      {
        name: "folderOpenOutlined",
        icon: <Icon.FolderOpenOutlined />,
      },
      {
        name: "folderCloudOutlined",
        icon: <Icon.FolderCloudOutlined />,
      },
    ],
  },
  {
    title: "Arrow",
    icons: [
      {
        name: "ReceivedOutlined",
        icon: <Icon.ReceivedOutlined />,
      },
      {
        name: "SendOutlined",
        icon: <Icon.SendOutlined />,
      },
      {
        name: "Arrow2Outlined",
        icon: <Icon.Arrow2Outlined />,
      },
      {
        name: "Arrow3Outlined",
        icon: <Icon.Arrow3Outlined />,
      },
      {
        name: "ArrowSquareUpOutlined",
        icon: <Icon.ArrowSquareUpOutlined />,
      },
      {
        name: "ArrowSquareDownOutlined",
        icon: <Icon.ArrowSquareDownOutlined />,
      },
      {
        name: "ArrowSquareLeftOutlined",
        icon: <Icon.ArrowSquareLeftOutlined />,
      },
      {
        name: "ArrowSquareRightOutlined",
        icon: <Icon.ArrowSquareRightOutlined />,
      },
      {
        name: "ArrowRightOutlined",
        icon: <Icon.ArrowRightOutlined />,
      },
      {
        name: "ArrowLeft1Outlined",
        icon: <Icon.ArrowLeft1Outlined />,
      },
      {
        name: "ArrowUpOutlined",
        icon: <Icon.ArrowUpOutlined />,
      },
      {
        name: "ArrowDown1Outlined",
        icon: <Icon.ArrowDown1Outlined />,
      },
      {
        name: "ArrowUp3Outlined",
        icon: <Icon.ArrowUp3Outlined />,
      },
      {
        name: "ArrowDown2Outlined",
        icon: <Icon.ArrowDown2Outlined />,
      },
      {
        name: "ArrowRight3Outlined",
        icon: <Icon.ArrowRight3Outlined />,
      },
      {
        name: "ArrowLeft2Outlined",
        icon: <Icon.ArrowLeft2Outlined />,
      },
      {
        name: "ArrowCircleLeftOutlined",
        icon: <Icon.ArrowCircleLeftOutlined />,
      },
      {
        name: "ArrowCircleRightOutlined",
        icon: <Icon.ArrowCircleRightOutlined />,
      },
      {
        name: "ArrowCircleDownOutlined",
        icon: <Icon.ArrowCircleDownOutlined />,
      },
      {
        name: "ArrowCircleUpOutlined",
        icon: <Icon.ArrowCircleUpOutlined />,
      },
      {
        name: "ArrowSwapOutlined",
        icon: <Icon.ArrowSwapOutlined />,
      },
      {
        name: "ArrowSwapHorizontalOutlined",
        icon: <Icon.ArrowSwapHorizontalOutlined />,
      },
      {
        name: "UndoOutlined",
        icon: <Icon.UndoOutlined />,
      },
      {
        name: "RedoOutlined",
        icon: <Icon.RedoOutlined />,
      },
      {
        name: "RotateLeftOutlined",
        icon: <Icon.RotateLeftOutlined />,
      },
      {
        name: "RotateRightOutlined",
        icon: <Icon.RotateRightOutlined />,
      },
      {
        name: "Refresh2Outlined",
        icon: <Icon.Refresh2Outlined />,
      },
      {
        name: "ArrowLeft3Outlined",
        icon: <Icon.ArrowLeft3Outlined />,
      },
      {
        name: "ArrowRight1Outlined",
        icon: <Icon.ArrowRight1Outlined />,
      },
      {
        name: "ArrowUp2Outlined",
        icon: <Icon.ArrowUp2Outlined />,
      },
      {
        name: "ArrowBottomOutlined",
        icon: <Icon.ArrowBottomOutlined />,
      },
      {
        name: "ArrowUp1Outlined",
        icon: <Icon.ArrowUp1Outlined />,
      },
      {
        name: "ArrowRight2Outlined",
        icon: <Icon.ArrowRight2Outlined />,
      },
      {
        name: "ArrowLeftOutlined",
        icon: <Icon.ArrowLeftOutlined />,
      },
      {
        name: "ArrowDownOutlined",
        icon: <Icon.ArrowDownOutlined />,
      },
      {
        name: "ConvertOutlined",
        icon: <Icon.ConvertOutlined />,
      },
      {
        name: "ArrangeSquareOutlined",
        icon: <Icon.ArrangeSquareOutlined />,
      },
      {
        name: "ArrangeSquare2Outlined",
        icon: <Icon.ArrangeSquare2Outlined />,
      },
      {
        name: "BackSquareOutlined",
        icon: <Icon.BackSquareOutlined />,
      },
      {
        name: "ForwardSquareOutlined",
        icon: <Icon.ForwardSquareOutlined />,
      },
      {
        name: "RefreshSquare2Outlined",
        icon: <Icon.RefreshSquare2Outlined />,
      },
      {
        name: "RefreshRightSquareOutlined",
        icon: <Icon.RefreshRightSquareOutlined />,
      },
      {
        name: "RefreshLeftSquareOutlined",
        icon: <Icon.RefreshLeftSquareOutlined />,
      },
      {
        name: "ReceiveSquareOutlined",
        icon: <Icon.ReceiveSquareOutlined />,
      },
      {
        name: "SendSquareOutlined",
        icon: <Icon.SendSquareOutlined />,
      },
      {
        name: "SendSqaure2Outlined",
        icon: <Icon.SendSqaure2Outlined />,
      },
      {
        name: "ReceiveSquare2Outlined",
        icon: <Icon.ReceiveSquare2Outlined />,
      },
      {
        name: "Login1Outlined",
        icon: <Icon.Login1Outlined />,
      },
      {
        name: "Logout1Outlined",
        icon: <Icon.Logout1Outlined />,
      },
      {
        name: "ExportOutlined",
        icon: <Icon.ExportOutlined />,
      },
      {
        name: "Import0Outlined",
        icon: <Icon.Import0Outlined />,
      },
      {
        name: "Import2Outlined",
        icon: <Icon.Import2Outlined />,
      },
      {
        name: "Export3Outlined",
        icon: <Icon.Export3Outlined />,
      },
      {
        name: "LoginOutlined",
        icon: <Icon.LoginOutlined />,
      },
      {
        name: "LogoutOutlined",
        icon: <Icon.LogoutOutlined />,
      },
      {
        name: "Export2Outlined",
        icon: <Icon.Export2Outlined />,
      },
      {
        name: "Import1Outlined",
        icon: <Icon.Import1Outlined />,
      },
      {
        name: "Export1Outlined",
        icon: <Icon.Export1Outlined />,
      },
      {
        name: "RefreshOutlined",
        icon: <Icon.RefreshOutlined />,
      },
      {
        name: "ArrangeCircleOutlined",
        icon: <Icon.ArrangeCircleOutlined />,
      },
      {
        name: "ArrangeCircle2Outlined",
        icon: <Icon.ArrangeCircle2Outlined />,
      },
      {
        name: "RepeatOutlined",
        icon: <Icon.RepeatOutlined />,
      },
      {
        name: "RepeatCircleOutlined",
        icon: <Icon.RepeatCircleOutlined />,
      },
    ],
  },
  {
    title: "User",
    icons: [
      {
        name: "UserOutlined",
        icon: <Icon.UserOutlined />,
      },
      {
        name: "UserAddOutlined",
        icon: <Icon.UserAddOutlined />,
      },
      {
        name: "UserRemoveOutlined",
        icon: <Icon.UserRemoveOutlined />,
      },
      {
        name: "UserTickOutlined",
        icon: <Icon.UserTickOutlined />,
      },
      {
        name: "UserMinusOutlined",
        icon: <Icon.UserMinusOutlined />,
      },
      {
        name: "UserSearchOutlined",
        icon: <Icon.UserSearchOutlined />,
      },
      {
        name: "UserEditOutlined",
        icon: <Icon.UserEditOutlined />,
      },
      {
        name: "UserTagOutlined",
        icon: <Icon.UserTagOutlined />,
      },
      {
        name: "UserOctagonOutlined",
        icon: <Icon.UserOctagonOutlined />,
      },
      {
        name: "UserCirlceAddOutlined",
        icon: <Icon.UserCirlceAddOutlined />,
      },
      {
        name: "UserSquareOutlined",
        icon: <Icon.UserSquareOutlined />,
      },
      {
        name: "Profile2UserOutlined",
        icon: <Icon.Profile2UserOutlined />,
      },
      {
        name: "ProfileRemoveOutlined",
        icon: <Icon.ProfileRemoveOutlined />,
      },
      {
        name: "ProfileTickOutlined",
        icon: <Icon.ProfileTickOutlined />,
      },
      {
        name: "ProfileAddOutlined",
        icon: <Icon.ProfileAddOutlined />,
      },
      {
        name: "ProfileDeleteOutlined",
        icon: <Icon.ProfileDeleteOutlined />,
      },
      {
        name: "ProfileCircleOutlined",
        icon: <Icon.ProfileCircleOutlined />,
      },
      {
        name: "TagUserOutlined",
        icon: <Icon.TagUserOutlined />,
      },
      {
        name: "PeopleOutlined",
        icon: <Icon.PeopleOutlined />,
      },
    ],
  },
  {
    title: "Car",
    icons: [
      {
        name: "AirplaneOutlined",
        icon: <Icon.AirplaneOutlined />,
      },
      {
        name: "CarOutlined",
        icon: <Icon.CarOutlined />,
      },
      {
        name: "BusOutlined",
        icon: <Icon.BusOutlined />,
      },
      {
        name: "SmartCarOutlined",
        icon: <Icon.SmartCarOutlined />,
      },
      {
        name: "DrivingOutlined",
        icon: <Icon.DrivingOutlined />,
      },
      {
        name: "ShipOutlined",
        icon: <Icon.ShipOutlined />,
      },
      {
        name: "AirplaneSquareOutlined",
        icon: <Icon.AirplaneSquareOutlined />,
      },
      {
        name: "GasStationOutlined",
        icon: <Icon.GasStationOutlined />,
      },
    ],
  },
  {
    title: "Location",
    icons: [
      {
        name: "LocationMinusOutlined",
        icon: <Icon.LocationMinusOutlined />,
      },
      {
        name: "LocationCrossOutlined",
        icon: <Icon.LocationCrossOutlined />,
      },
      {
        name: "LocationTickOutlined",
        icon: <Icon.LocationTickOutlined />,
      },
      {
        name: "LocationSlashOutlined",
        icon: <Icon.LocationSlashOutlined />,
      },
      {
        name: "DiscoverOutlined",
        icon: <Icon.DiscoverOutlined />,
      },
      {
        name: "LocationOutlined",
        icon: <Icon.LocationOutlined />,
      },
      {
        name: "LocationAddOutlined",
        icon: <Icon.LocationAddOutlined />,
      },
      {
        name: "RadarOutlined",
        icon: <Icon.RadarOutlined />,
      },
      {
        name: "Radar2Outlined",
        icon: <Icon.Radar2Outlined />,
      },
      {
        name: "GlobalSearchOutlined",
        icon: <Icon.GlobalSearchOutlined />,
      },
      {
        name: "GlobalEditOutlined",
        icon: <Icon.GlobalEditOutlined />,
      },
      {
        name: "GlobalRefreshOutlined",
        icon: <Icon.GlobalRefreshOutlined />,
      },
      {
        name: "GlobalOutlined",
        icon: <Icon.GlobalOutlined />,
      },
      {
        name: "DirectUpOutlined",
        icon: <Icon.DirectUpOutlined />,
      },
      {
        name: "DirectDownOutlined",
        icon: <Icon.DirectDownOutlined />,
      },
      {
        name: "DirectLeftOutlined",
        icon: <Icon.DirectLeftOutlined />,
      },
      {
        name: "DirectRightOutlined",
        icon: <Icon.DirectRightOutlined />,
      },
      {
        name: "MapOutlined",
        icon: <Icon.MapOutlined />,
      },
      {
        name: "GpsOutlined",
        icon: <Icon.GpsOutlined />,
      },
      {
        name: "GpsSlashOutlined",
        icon: <Icon.GpsSlashOutlined />,
      },
      {
        name: "Map1Outlined",
        icon: <Icon.Map1Outlined />,
      },
      {
        name: "RoutingOutlined",
        icon: <Icon.RoutingOutlined />,
      },
      {
        name: "Routing2Outlined",
        icon: <Icon.Routing2Outlined />,
      },
      {
        name: "ArrowSquareOutlined",
        icon: <Icon.ArrowSquareOutlined />,
      },
      {
        name: "PictureFrameOutlined",
        icon: <Icon.PictureFrameOutlined />,
      },
      {
        name: "ArrowOutlined",
        icon: <Icon.ArrowOutlined />,
      },
      {
        name: "RouteSquareOutlined",
        icon: <Icon.RouteSquareOutlined />,
      },
    ],
  },
  {
    title: "School",
    icons: [
      {
        name: "BriefcaseOutlined",
        icon: <Icon.BriefcaseOutlined />,
      },
      {
        name: "BrifecaseTimerOutlined",
        icon: <Icon.BrifecaseTimerOutlined />,
      },
      {
        name: "BrifecaseTickOutlined",
        icon: <Icon.BrifecaseTickOutlined />,
      },
      {
        name: "BrifecaseCrossOutlined",
        icon: <Icon.BrifecaseCrossOutlined />,
      },
      {
        name: "BookmarkOutlined",
        icon: <Icon.BookmarkOutlined />,
      },
      {
        name: "AwardOutlined",
        icon: <Icon.AwardOutlined />,
      },
      {
        name: "BookOutlined",
        icon: <Icon.BookOutlined />,
      },
      {
        name: "Bookmark2Outlined",
        icon: <Icon.Bookmark2Outlined />,
      },
      {
        name: "Book1Outlined",
        icon: <Icon.Book1Outlined />,
      },
      {
        name: "ClipboardOutlined",
        icon: <Icon.ClipboardOutlined />,
      },
      {
        name: "NoteOutlined",
        icon: <Icon.NoteOutlined />,
      },
      {
        name: "Note2Outlined",
        icon: <Icon.Note2Outlined />,
      },
      {
        name: "TeacherOutlined",
        icon: <Icon.TeacherOutlined />,
      },
      {
        name: "GiftOutlined",
        icon: <Icon.GiftOutlined />,
      },
      {
        name: "CalculatorOutlined",
        icon: <Icon.CalculatorOutlined />,
      },
    ],
  },
  {
    title: "Delivery",
    icons: [
      {
        name: "Box1Outlined",
        icon: <Icon.Box1Outlined />,
      },
      {
        name: "Cube3DOutlined",
        icon: <Icon.Cube3DOutlined />,
      },
      {
        name: "Convert3DCubeOutlined",
        icon: <Icon.Convert3DCubeOutlined />,
      },
      {
        name: "BoxAddOutlined",
        icon: <Icon.BoxAddOutlined />,
      },
      {
        name: "BoxRemoveOutlined",
        icon: <Icon.BoxRemoveOutlined />,
      },
      {
        name: "BoxTickOutlined",
        icon: <Icon.BoxTickOutlined />,
      },
      {
        name: "BoxTimeOutlined",
        icon: <Icon.BoxTimeOutlined />,
      },
      {
        name: "BoxOutlined",
        icon: <Icon.BoxOutlined />,
      },
      {
        name: "BoxSearchOutlined",
        icon: <Icon.BoxSearchOutlined />,
      },
      {
        name: "TruckOutlined",
        icon: <Icon.TruckOutlined />,
      },
      {
        name: "TruckFastOutlined",
        icon: <Icon.TruckFastOutlined />,
      },
      {
        name: "TruckTickOutlined",
        icon: <Icon.TruckTickOutlined />,
      },
      {
        name: "TruckTimeOutlined",
        icon: <Icon.TruckTimeOutlined />,
      },
      {
        name: "TruckRemoveOutlined",
        icon: <Icon.TruckRemoveOutlined />,
      },
      {
        name: "Square3DOutlined",
        icon: <Icon.Square3DOutlined />,
      },
      {
        name: "Rotate3DOutlined",
        icon: <Icon.Rotate3DOutlined />,
      },
    ],
  },
  {
    title: "Security",
    icons: [
      {
        name: "EyeOutlined",
        icon: <Icon.EyeOutlined />,
      },
      {
        name: "EyeSlashOutlined",
        icon: <Icon.EyeSlashOutlined />,
      },
      {
        name: "ShieldTickOutlined",
        icon: <Icon.ShieldTickOutlined />,
      },
      {
        name: "ShieldCrossOutlined",
        icon: <Icon.ShieldCrossOutlined />,
      },
      {
        name: "ShieldSlashOutlined",
        icon: <Icon.ShieldSlashOutlined />,
      },
      {
        name: "PasswordCheckOutlined",
        icon: <Icon.PasswordCheckOutlined />,
      },
      {
        name: "ShieldSearchOutlined",
        icon: <Icon.ShieldSearchOutlined />,
      },
      {
        name: "KeySquareOutlined",
        icon: <Icon.KeySquareOutlined />,
      },
      {
        name: "KeyOutlined",
        icon: <Icon.KeyOutlined />,
      },
      {
        name: "CheckOutlined",
        icon: <Icon.CheckOutlined />,
      },
      {
        name: "Lock1Outlined",
        icon: <Icon.Lock1Outlined />,
      },
      {
        name: "UnlockOutlined",
        icon: <Icon.UnlockOutlined />,
      },
      {
        name: "LockSlashOutlined",
        icon: <Icon.LockSlashOutlined />,
      },
      {
        name: "ScanOutlined",
        icon: <Icon.ScanOutlined />,
      },
      {
        name: "ScanBarcodeOutlined",
        icon: <Icon.ScanBarcodeOutlined />,
      },
      {
        name: "ScanningOutlined",
        icon: <Icon.ScanningOutlined />,
      },
      {
        name: "FingerScanOutlined",
        icon: <Icon.FingerScanOutlined />,
      },
      {
        name: "FingerCricleOutlined",
        icon: <Icon.FingerCricleOutlined />,
      },
      {
        name: "ScannerOutlined",
        icon: <Icon.ScannerOutlined />,
      },
      {
        name: "SecurityUserOutlined",
        icon: <Icon.SecurityUserOutlined />,
      },
      {
        name: "LockOutlined",
        icon: <Icon.LockOutlined />,
      },
      {
        name: "LockCircleOutlined",
        icon: <Icon.LockCircleOutlined />,
      },
      {
        name: "AlarmOutlined",
        icon: <Icon.AlarmOutlined />,
      },
      {
        name: "Radar1Outlined",
        icon: <Icon.Radar1Outlined />,
      },
      {
        name: "SecuritySafeOutlined",
        icon: <Icon.SecuritySafeOutlined />,
      },
      {
        name: "SecurityOutlined",
        icon: <Icon.SecurityOutlined />,
      },
    ],
  },
  {
    title: "Tools",
    icons: [
      {
        name: "BezierOutlined",
        icon: <Icon.BezierOutlined />,
      },
      {
        name: "Brush4Outlined",
        icon: <Icon.Brush4Outlined />,
      },
      {
        name: "Brush3Outlined",
        icon: <Icon.Brush3Outlined />,
      },
      {
        name: "MagicpenOutlined",
        icon: <Icon.MagicpenOutlined />,
      },
      {
        name: "PenToolOutlined",
        icon: <Icon.PenToolOutlined />,
      },
      {
        name: "BucketOutlined",
        icon: <Icon.BucketOutlined />,
      },
      {
        name: "PaintbucketOutlined",
        icon: <Icon.PaintbucketOutlined />,
      },
      {
        name: "AdditemOutlined",
        icon: <Icon.AdditemOutlined />,
      },
      {
        name: "RulerOutlined",
        icon: <Icon.RulerOutlined />,
      },
      {
        name: "DesigntoolsOutlined",
        icon: <Icon.DesigntoolsOutlined />,
      },
      {
        name: "ShapesOutlined",
        icon: <Icon.ShapesOutlined />,
      },
      {
        name: "LifebuoyOutlined",
        icon: <Icon.LifebuoyOutlined />,
      },
      {
        name: "PenTool2Outlined",
        icon: <Icon.PenTool2Outlined />,
      },
      {
        name: "Brush1Outlined",
        icon: <Icon.Brush1Outlined />,
      },
      {
        name: "PenCloseOutlined",
        icon: <Icon.PenCloseOutlined />,
      },
      {
        name: "PenAddOutlined",
        icon: <Icon.PenAddOutlined />,
      },
      {
        name: "PenRemoveOutlined",
        icon: <Icon.PenRemoveOutlined />,
      },
      {
        name: "PathOutlined",
        icon: <Icon.PathOutlined />,
      },
      {
        name: "Path2Outlined",
        icon: <Icon.Path2Outlined />,
      },
      {
        name: "BucketCircleOutlined",
        icon: <Icon.BucketCircleOutlined />,
      },
      {
        name: "BucketSquareOutlined",
        icon: <Icon.BucketSquareOutlined />,
      },
      {
        name: "Brush2Outlined",
        icon: <Icon.Brush2Outlined />,
      },
      {
        name: "Scissor1Outlined",
        icon: <Icon.Scissor1Outlined />,
      },
      {
        name: "GlassOutlined",
        icon: <Icon.GlassOutlined />,
      },
      {
        name: "ColorSwatchOutlined",
        icon: <Icon.ColorSwatchOutlined />,
      },
      {
        name: "Blend2Outlined",
        icon: <Icon.Blend2Outlined />,
      },
      {
        name: "PathSquareOutlined",
        icon: <Icon.PathSquareOutlined />,
      },
      {
        name: "OmegaCircleOutlined",
        icon: <Icon.OmegaCircleOutlined />,
      },
      {
        name: "OmegaSquareOutlined",
        icon: <Icon.OmegaSquareOutlined />,
      },
      {
        name: "Shapes1Outlined",
        icon: <Icon.Shapes1Outlined />,
      },
      {
        name: "SizeOutlined",
        icon: <Icon.SizeOutlined />,
      },
      {
        name: "FlashCircleOutlined",
        icon: <Icon.FlashCircleOutlined />,
      },
      {
        name: "Eraser1Outlined",
        icon: <Icon.Eraser1Outlined />,
      },
      {
        name: "MaskOutlined",
        icon: <Icon.MaskOutlined />,
      },
      {
        name: "BlurOutlined",
        icon: <Icon.BlurOutlined />,
      },
      {
        name: "BlendOutlined",
        icon: <Icon.BlendOutlined />,
      },
      {
        name: "ColorfilterOutlined",
        icon: <Icon.ColorfilterOutlined />,
      },
      {
        name: "ColorsSquareOutlined",
        icon: <Icon.ColorsSquareOutlined />,
      },
      {
        name: "Mask1Outlined",
        icon: <Icon.Mask1Outlined />,
      },
      {
        name: "BrushOutlined",
        icon: <Icon.BrushOutlined />,
      },
      {
        name: "LayerOutlined",
        icon: <Icon.LayerOutlined />,
      },
      {
        name: "CopyOutlined",
        icon: <Icon.CopyOutlined />,
      },
      {
        name: "CopySuccessOutlined",
        icon: <Icon.CopySuccessOutlined />,
      },
      {
        name: "RecoveryConvertOutlined",
        icon: <Icon.RecoveryConvertOutlined />,
      },
      {
        name: "MainComponentOutlined",
        icon: <Icon.MainComponentOutlined />,
      },
      {
        name: "ComponentOutlined",
        icon: <Icon.ComponentOutlined />,
      },
      {
        name: "Mask2Outlined",
        icon: <Icon.Mask2Outlined />,
      },
      {
        name: "ForwardItemOutlined",
        icon: <Icon.ForwardItemOutlined />,
      },
      {
        name: "BackwardItemOutlined",
        icon: <Icon.BackwardItemOutlined />,
      },
      {
        name: "ReplyOutlined",
        icon: <Icon.ReplyOutlined />,
      },
      {
        name: "ForwardOutlined",
        icon: <Icon.ForwardOutlined />,
      },
    ],
  },
  {
    title: "Grid",
    icons: [
      {
        name: "FatrowsOutlined",
        icon: <Icon.FatrowsOutlined />,
      },
      {
        name: "RowVerticalOutlined",
        icon: <Icon.RowVerticalOutlined />,
      },
      {
        name: "RowHorizontalOutlined",
        icon: <Icon.RowHorizontalOutlined />,
      },
      {
        name: "SliderVertical1Outlined",
        icon: <Icon.SliderVertical1Outlined />,
      },
      {
        name: "SliderHorizontal1Outlined",
        icon: <Icon.SliderHorizontal1Outlined />,
      },
      {
        name: "SliderVerticalOutlined",
        icon: <Icon.SliderVerticalOutlined />,
      },
      {
        name: "SliderHorizontalOutlined",
        icon: <Icon.SliderHorizontalOutlined />,
      },
      {
        name: "Grid4Outlined",
        icon: <Icon.Grid4Outlined />,
      },
      {
        name: "Grid9Outlined",
        icon: <Icon.Grid9Outlined />,
      },
      {
        name: "Grid2Outlined",
        icon: <Icon.Grid2Outlined />,
      },
      {
        name: "Grid3Outlined",
        icon: <Icon.Grid3Outlined />,
      },
      {
        name: "Grid5Outlined",
        icon: <Icon.Grid5Outlined />,
      },
      {
        name: "Grid6Outlined",
        icon: <Icon.Grid6Outlined />,
      },
      {
        name: "Grid7Outlined",
        icon: <Icon.Grid7Outlined />,
      },
      {
        name: "Grid8Outlined",
        icon: <Icon.Grid8Outlined />,
      },
      {
        name: "Grid1Outlined",
        icon: <Icon.Grid1Outlined />,
      },
      {
        name: "Element2Outlined",
        icon: <Icon.Element2Outlined />,
      },
      {
        name: "Element3Outlined",
        icon: <Icon.Element3Outlined />,
      },
      {
        name: "Element4Outlined",
        icon: <Icon.Element4Outlined />,
      },
      {
        name: "ElementPlusOutlined",
        icon: <Icon.ElementPlusOutlined />,
      },
      {
        name: "ElementEqualOutlined",
        icon: <Icon.ElementEqualOutlined />,
      },
      {
        name: "ThreeSquareOutlined",
        icon: <Icon.ThreeSquareOutlined />,
      },
      {
        name: "AlignVerticallyOutlined",
        icon: <Icon.AlignVerticallyOutlined />,
      },
      {
        name: "AlignHorizontallyOutlined",
        icon: <Icon.AlignHorizontallyOutlined />,
      },
      {
        name: "AlignLeftOutlined",
        icon: <Icon.AlignLeftOutlined />,
      },
      {
        name: "AlignRightOutlined",
        icon: <Icon.AlignRightOutlined />,
      },
      {
        name: "AlignBottomOutlined",
        icon: <Icon.AlignBottomOutlined />,
      },
      {
        name: "Maximize1Outlined",
        icon: <Icon.Maximize1Outlined />,
      },
      {
        name: "Maximize2Outlined",
        icon: <Icon.Maximize2Outlined />,
      },
      {
        name: "Maximize3Outlined",
        icon: <Icon.Maximize3Outlined />,
      },
      {
        name: "Maximize4Outlined",
        icon: <Icon.Maximize4Outlined />,
      },
      {
        name: "FormatCircleOutlined",
        icon: <Icon.FormatCircleOutlined />,
      },
      {
        name: "FormatSquareOutlined",
        icon: <Icon.FormatSquareOutlined />,
      },
      {
        name: "RotateLeft1Outlined",
        icon: <Icon.RotateLeft1Outlined />,
      },
      {
        name: "RotateRight1Outlined",
        icon: <Icon.RotateRight1Outlined />,
      },
      {
        name: "CropOutlined",
        icon: <Icon.CropOutlined />,
      },
      {
        name: "Maximize21Outlined",
        icon: <Icon.Maximize21Outlined />,
      },
      {
        name: "ConvertshapeOutlined",
        icon: <Icon.ConvertshapeOutlined />,
      },
      {
        name: "Convertshape2Outlined",
        icon: <Icon.Convertshape2Outlined />,
      },
      {
        name: "GridEraserOutlined",
        icon: <Icon.GridEraserOutlined />,
      },
      {
        name: "GridLockOutlined",
        icon: <Icon.GridLockOutlined />,
      },
      {
        name: "GridEditOutlined",
        icon: <Icon.GridEditOutlined />,
      },
    ],
  },
  {
    title: "Shop",
    icons: [
      {
        name: "BagOutlined",
        icon: <Icon.BagOutlined />,
      },
      {
        name: "BagHappyOutlined",
        icon: <Icon.BagHappyOutlined />,
      },
      {
        name: "BagTickOutlined",
        icon: <Icon.BagTickOutlined />,
      },
      {
        name: "BagCrossOutlined",
        icon: <Icon.BagCrossOutlined />,
      },
      {
        name: "BagTimerOutlined",
        icon: <Icon.BagTimerOutlined />,
      },
      {
        name: "BagTick2Outlined",
        icon: <Icon.BagTick2Outlined />,
      },
      {
        name: "BagCross1Outlined",
        icon: <Icon.BagCross1Outlined />,
      },
      {
        name: "Bag2Outlined",
        icon: <Icon.Bag2Outlined />,
      },
      {
        name: "ShoppingCartOutlined",
        icon: <Icon.ShoppingCartOutlined />,
      },
      {
        name: "ShoppingBagOutlined",
        icon: <Icon.ShoppingBagOutlined />,
      },
      {
        name: "ShopAddOutlined",
        icon: <Icon.ShopAddOutlined />,
      },
      {
        name: "ShopRemoveOutlined",
        icon: <Icon.ShopRemoveOutlined />,
      },
      {
        name: "ShopOutlined",
        icon: <Icon.ShopOutlined />,
      },
      {
        name: "BarcodeOutlined",
        icon: <Icon.BarcodeOutlined />,
      },
    ],
  },
  {
    title: "Content, Edit",
    icons: [
      {
        name: "Document1Outlined",
        icon: <Icon.Document1Outlined />,
      },
      {
        name: "DocumentTextOutlined",
        icon: <Icon.DocumentTextOutlined />,
      },
      {
        name: "DocumentWordOutlined",
        icon: <Icon.DocumentWordOutlined />,
      },
      {
        name: "DocumentExcelOutlined",
        icon: <Icon.DocumentExcelOutlined />,
      },
      {
        name: "DocumentPptOutlined",
        icon: <Icon.DocumentPptOutlined />,
      },
      {
        name: "DocumentPdfOutlined",
        icon: <Icon.DocumentPdfOutlined />,
      },
      {
        name: "DocumentFavoriteOutlined",
        icon: <Icon.DocumentFavoriteOutlined />,
      },
      {
        name: "DocumentDownloadOutlined",
        icon: <Icon.DocumentDownloadOutlined />,
      },
      {
        name: "DocumentUploadOutlined",
        icon: <Icon.DocumentUploadOutlined />,
      },
      {
        name: "DocumentForwardOutlined",
        icon: <Icon.DocumentForwardOutlined />,
      },
      {
        name: "DocumentPreviousOutlined",
        icon: <Icon.DocumentPreviousOutlined />,
      },
      {
        name: "DocumentSketchOutlined",
        icon: <Icon.DocumentSketchOutlined />,
      },
      {
        name: "DocumentCloudOutlined",
        icon: <Icon.DocumentCloudOutlined />,
      },
      {
        name: "DocumentCopyOutlined",
        icon: <Icon.DocumentCopyOutlined />,
      },
      {
        name: "DocumentNormalOutlined",
        icon: <Icon.DocumentNormalOutlined />,
      },
      {
        name: "ClipboardTextOutlined",
        icon: <Icon.ClipboardTextOutlined />,
      },
      {
        name: "ClipboardTickOutlined",
        icon: <Icon.ClipboardTickOutlined />,
      },
      {
        name: "ClipboardCloseOutlined",
        icon: <Icon.ClipboardCloseOutlined />,
      },
      {
        name: "ClipboardExportOutlined",
        icon: <Icon.ClipboardExportOutlined />,
      },
      {
        name: "ClipboardImportOutlined",
        icon: <Icon.ClipboardImportOutlined />,
      },
      {
        name: "Note1Outlined",
        icon: <Icon.Note1Outlined />,
      },
      {
        name: "DocumentText1Outlined",
        icon: <Icon.DocumentText1Outlined />,
      },
      {
        name: "DocumentLikeOutlined",
        icon: <Icon.DocumentLikeOutlined />,
      },
      {
        name: "EditOutlined",
        icon: <Icon.EditOutlined />,
      },
      {
        name: "Edit2Outlined",
        icon: <Icon.Edit2Outlined />,
      },
      {
        name: "CopyrightOutlined",
        icon: <Icon.CopyrightOutlined />,
      },
      {
        name: "CreativeCommonsOutlined",
        icon: <Icon.CreativeCommonsOutlined />,
      },
      {
        name: "Note21Outlined",
        icon: <Icon.Note21Outlined />,
      },
      {
        name: "NoteRemoveOutlined",
        icon: <Icon.NoteRemoveOutlined />,
      },
      {
        name: "StickynoteOutlined",
        icon: <Icon.StickynoteOutlined />,
      },
      {
        name: "NoteAddOutlined",
        icon: <Icon.NoteAddOutlined />,
      },
      {
        name: "TaskOutlined",
        icon: <Icon.TaskOutlined />,
      },
      {
        name: "TaskSquareOutlined",
        icon: <Icon.TaskSquareOutlined />,
      },
      {
        name: "BillOutlined",
        icon: <Icon.BillOutlined />,
      },
      {
        name: "DocumentFilterOutlined",
        icon: <Icon.DocumentFilterOutlined />,
      },
      {
        name: "ArchiveBookOutlined",
        icon: <Icon.ArchiveBookOutlined />,
      },
      {
        name: "NoteTextOutlined",
        icon: <Icon.NoteTextOutlined />,
      },
      {
        name: "NoteFavoriteOutlined",
        icon: <Icon.NoteFavoriteOutlined />,
      },
      {
        name: "MenuBoardOutlined",
        icon: <Icon.MenuBoardOutlined />,
      },
      {
        name: "AddRightColumnOutlined",
        icon: <Icon.AddRightColumnOutlined />,
      },
      {
        name: "AddLeftColumnOutlined",
        icon: <Icon.AddLeftColumnOutlined />,
      },
      {
        name: "AddTopRowOutlined",
        icon: <Icon.AddTopRowOutlined />,
      },
      {
        name: "AddBottomRowOutlined",
        icon: <Icon.AddBottomRowOutlined />,
      },
      {
        name: "MergeColumnsOutlined",
        icon: <Icon.MergeColumnsOutlined />,
      },
      {
        name: "SplitColumnsOutlined",
        icon: <Icon.SplitColumnsOutlined />,
      },
      {
        name: "RemoveColumnOutlined",
        icon: <Icon.RemoveColumnOutlined />,
      },
      {
        name: "RemoveRowOutlined",
        icon: <Icon.RemoveRowOutlined />,
      },
      {
        name: "UnorderedListOutlined",
        icon: <Icon.UnorderedListOutlined />,
      },
      {
        name: "OrderedListOutlined",
        icon: <Icon.OrderedListOutlined />,
      },
    ],
  },
  {
    title: "Programing",
    icons: [
      {
        name: "CommandOutlined",
        icon: <Icon.CommandOutlined />,
      },
      {
        name: "ProgrammingArrowOutlined",
        icon: <Icon.ProgrammingArrowOutlined />,
      },
      {
        name: "HierarchyOutlined",
        icon: <Icon.HierarchyOutlined />,
      },
      {
        name: "Hierarchy2Outlined",
        icon: <Icon.Hierarchy2Outlined />,
      },
      {
        name: "CommandSquareOutlined",
        icon: <Icon.CommandSquareOutlined />,
      },
      {
        name: "HierarchySquareOutlined",
        icon: <Icon.HierarchySquareOutlined />,
      },
      {
        name: "HierarchySquare2Outlined",
        icon: <Icon.HierarchySquare2Outlined />,
      },
      {
        name: "HierarchySquare3Outlined",
        icon: <Icon.HierarchySquare3Outlined />,
      },
      {
        name: "DataOutlined",
        icon: <Icon.DataOutlined />,
      },
      {
        name: "Data2Outlined",
        icon: <Icon.Data2Outlined />,
      },
      {
        name: "DocumentCodeOutlined",
        icon: <Icon.DocumentCodeOutlined />,
      },
      {
        name: "CodeCircleOutlined",
        icon: <Icon.CodeCircleOutlined />,
      },
      {
        name: "Hierarchy3Outlined",
        icon: <Icon.Hierarchy3Outlined />,
      },
      {
        name: "ProgrammingArrowsOutlined",
        icon: <Icon.ProgrammingArrowsOutlined />,
      },
      {
        name: "DocumentCode2Outlined",
        icon: <Icon.DocumentCode2Outlined />,
      },
      {
        name: "MessageProgrammingOutlined",
        icon: <Icon.MessageProgrammingOutlined />,
      },
      {
        name: "MobileProgrammingOutlined",
        icon: <Icon.MobileProgrammingOutlined />,
      },
      {
        name: "CodeOutlined",
        icon: <Icon.CodeOutlined />,
      },
      {
        name: "Code1Outlined",
        icon: <Icon.Code1Outlined />,
      },
      {
        name: "HashtagUpOutlined",
        icon: <Icon.HashtagUpOutlined />,
      },
      {
        name: "HashtagOutlined",
        icon: <Icon.HashtagOutlined />,
      },
      {
        name: "HashtagDownOutlined",
        icon: <Icon.HashtagDownOutlined />,
      },
      {
        name: "ScrollOutlined",
        icon: <Icon.ScrollOutlined />,
      },
      {
        name: "SidebarLeftOutlined",
        icon: <Icon.SidebarLeftOutlined />,
      },
      {
        name: "SidebarRightOutlined",
        icon: <Icon.SidebarRightOutlined />,
      },
      {
        name: "SidebarTopOutlined",
        icon: <Icon.SidebarTopOutlined />,
      },
      {
        name: "SidebarBottomOutlined",
        icon: <Icon.SidebarBottomOutlined />,
      },
    ],
  },
  {
    title: "Essestional",
    icons: [
      {
        name: "TrashOutlined",
        icon: <Icon.TrashOutlined />,
      },
      {
        name: "PinOutlined",
        icon: <Icon.PinOutlined />,
      },
      {
        name: "BatteryEmptyOutlined",
        icon: <Icon.BatteryEmptyOutlined />,
      },
      {
        name: "BatteryEmpty1Outlined",
        icon: <Icon.BatteryEmpty1Outlined />,
      },
      {
        name: "BatteryFullOutlined",
        icon: <Icon.BatteryFullOutlined />,
      },
      {
        name: "BatteryChargingOutlined",
        icon: <Icon.BatteryChargingOutlined />,
      },
      {
        name: "BatteryDisableOutlined",
        icon: <Icon.BatteryDisableOutlined />,
      },
      {
        name: "Home1Outlined",
        icon: <Icon.Home1Outlined />,
      },
      {
        name: "Home2Outlined",
        icon: <Icon.Home2Outlined />,
      },
      {
        name: "MoreSquareOutlined",
        icon: <Icon.MoreSquareOutlined />,
      },
      {
        name: "TickCircleOutlined",
        icon: <Icon.TickCircleOutlined />,
      },
      {
        name: "AddCircleOutlined",
        icon: <Icon.AddCircleOutlined />,
      },
      {
        name: "MinusCirlceOutlined",
        icon: <Icon.MinusCirlceOutlined />,
      },
      {
        name: "CloseCircleOutlined",
        icon: <Icon.CloseCircleOutlined />,
      },
      {
        name: "MoreCircleOutlined",
        icon: <Icon.MoreCircleOutlined />,
      },
      {
        name: "InfoCircleOutlined",
        icon: <Icon.InfoCircleOutlined />,
      },
      {
        name: "DangerOutlined",
        icon: <Icon.DangerOutlined />,
      },
      {
        name: "AddOutlined",
        icon: <Icon.AddOutlined />,
      },
      {
        name: "MinusOutlined",
        icon: <Icon.MinusOutlined />,
      },
      {
        name: "AddSquareOutlined",
        icon: <Icon.AddSquareOutlined />,
      },
      {
        name: "MinusSquareOutlined",
        icon: <Icon.MinusSquareOutlined />,
      },
      {
        name: "TickOutlined",
        icon: <Icon.TickOutlined />,
      },
      {
        name: "TickSquareOutlined",
        icon: <Icon.TickSquareOutlined />,
      },
      {
        name: "CloseOutlined",
        icon: <Icon.CloseOutlined />,
      },
      {
        name: "CloseSquareOutlined",
        icon: <Icon.CloseSquareOutlined />,
      },
      {
        name: "SortOutlined",
        icon: <Icon.SortOutlined />,
      },
      {
        name: "Send1Outlined",
        icon: <Icon.Send1Outlined />,
      },
      {
        name: "Send2Outlined",
        icon: <Icon.Send2Outlined />,
      },
      {
        name: "ShareOutlined",
        icon: <Icon.ShareOutlined />,
      },
      {
        name: "Flash1Outlined",
        icon: <Icon.Flash1Outlined />,
      },
      {
        name: "FlashSlashOutlined",
        icon: <Icon.FlashSlashOutlined />,
      },
      {
        name: "FlashCircle1Outlined",
        icon: <Icon.FlashCircle1Outlined />,
      },
      {
        name: "SlashOutlined",
        icon: <Icon.SlashOutlined />,
      },
      {
        name: "CakeOutlined",
        icon: <Icon.CakeOutlined />,
      },
      {
        name: "GrammerlyOutlined",
        icon: <Icon.GrammerlyOutlined />,
      },
      {
        name: "ChartOutlined",
        icon: <Icon.ChartOutlined />,
      },
      {
        name: "Archive2Outlined",
        icon: <Icon.Archive2Outlined />,
      },
      {
        name: "ChromeOutlined",
        icon: <Icon.ChromeOutlined />,
      },
      {
        name: "InstagramOutlined",
        icon: <Icon.InstagramOutlined />,
      },
      {
        name: "CoffeeOutlined",
        icon: <Icon.CoffeeOutlined />,
      },
      {
        name: "PetOutlined",
        icon: <Icon.PetOutlined />,
      },
      {
        name: "HappyemojiOutlined",
        icon: <Icon.HappyemojiOutlined />,
      },
      {
        name: "ReserveOutlined",
        icon: <Icon.ReserveOutlined />,
      },
      {
        name: "StickerOutlined",
        icon: <Icon.StickerOutlined />,
      },
      {
        name: "ComputingOutlined",
        icon: <Icon.ComputingOutlined />,
      },
      {
        name: "VerifyOutlined",
        icon: <Icon.VerifyOutlined />,
      },
      {
        name: "CrownOutlined",
        icon: <Icon.CrownOutlined />,
      },
      {
        name: "Crown1Outlined",
        icon: <Icon.Crown1Outlined />,
      },
      {
        name: "FlagOutlined",
        icon: <Icon.FlagOutlined />,
      },
      {
        name: "Flag2Outlined",
        icon: <Icon.Flag2Outlined />,
      },
      {
        name: "CupOutlined",
        icon: <Icon.CupOutlined />,
      },
      {
        name: "EmojiHappyOutlined",
        icon: <Icon.EmojiHappyOutlined />,
      },
      {
        name: "EmojiNormalOutlined",
        icon: <Icon.EmojiNormalOutlined />,
      },
      {
        name: "EmojiSadOutlined",
        icon: <Icon.EmojiSadOutlined />,
      },
      {
        name: "TagCrossOutlined",
        icon: <Icon.TagCrossOutlined />,
      },
      {
        name: "MenuOutlined",
        icon: <Icon.MenuOutlined />,
      },
      {
        name: "CdOutlined",
        icon: <Icon.CdOutlined />,
      },
      {
        name: "InformationOutlined",
        icon: <Icon.InformationOutlined />,
      },
      {
        name: "AutobrightnessOutlined",
        icon: <Icon.AutobrightnessOutlined />,
      },
      {
        name: "TriangleOutlined",
        icon: <Icon.TriangleOutlined />,
      },
      {
        name: "Glass1Outlined",
        icon: <Icon.Glass1Outlined />,
      },
      {
        name: "Discover1Outlined",
        icon: <Icon.Discover1Outlined />,
      },
      {
        name: "WeightOutlined",
        icon: <Icon.WeightOutlined />,
      },
      {
        name: "FilterOutlined",
        icon: <Icon.FilterOutlined />,
      },
      {
        name: "FilterSquareOutlined",
        icon: <Icon.FilterSquareOutlined />,
      },
      {
        name: "SoundOutlined",
        icon: <Icon.SoundOutlined />,
      },
      {
        name: "StoryOutlined",
        icon: <Icon.StoryOutlined />,
      },
      {
        name: "SliderOutlined",
        icon: <Icon.SliderOutlined />,
      },
      {
        name: "StatusOutlined",
        icon: <Icon.StatusOutlined />,
      },
      {
        name: "WifiSquareOutlined",
        icon: <Icon.WifiSquareOutlined />,
      },
      {
        name: "Box2Outlined",
        icon: <Icon.Box2Outlined />,
      },
      {
        name: "TrashSquareOutlined",
        icon: <Icon.TrashSquareOutlined />,
      },
      {
        name: "WifiOutlined",
        icon: <Icon.WifiOutlined />,
      },
      {
        name: "SpeedometerOutlined",
        icon: <Icon.SpeedometerOutlined />,
      },
      {
        name: "DiamondsOutlined",
        icon: <Icon.DiamondsOutlined />,
      },
      {
        name: "JudgeOutlined",
        icon: <Icon.JudgeOutlined />,
      },
      {
        name: "LevelOutlined",
        icon: <Icon.LevelOutlined />,
      },
      {
        name: "LampOutlined",
        icon: <Icon.LampOutlined />,
      },
      {
        name: "TreeOutlined",
        icon: <Icon.TreeOutlined />,
      },
      {
        name: "BubbleOutlined",
        icon: <Icon.BubbleOutlined />,
      },
      {
        name: "MirrorOutlined",
        icon: <Icon.MirrorOutlined />,
      },
      {
        name: "TagRightOutlined",
        icon: <Icon.TagRightOutlined />,
      },
      {
        name: "MilkOutlined",
        icon: <Icon.MilkOutlined />,
      },
      {
        name: "GhostOutlined",
        icon: <Icon.GhostOutlined />,
      },
      {
        name: "RankingOutlined",
        icon: <Icon.RankingOutlined />,
      },
      {
        name: "MouseSquareOutlined",
        icon: <Icon.MouseSquareOutlined />,
      },
      {
        name: "MouseCircleOutlined",
        icon: <Icon.MouseCircleOutlined />,
      },
      {
        name: "MouseOutlined",
        icon: <Icon.MouseOutlined />,
      },
      {
        name: "ForbiddenOutlined",
        icon: <Icon.ForbiddenOutlined />,
      },
      {
        name: "Forbidden2Outlined",
        icon: <Icon.Forbidden2Outlined />,
      },
      {
        name: "Warning2Outlined",
        icon: <Icon.Warning2Outlined />,
      },
      {
        name: "BroomOutlined",
        icon: <Icon.BroomOutlined />,
      },
      {
        name: "SignpostOutlined",
        icon: <Icon.SignpostOutlined />,
      },
      {
        name: "FilterRemoveOutlined",
        icon: <Icon.FilterRemoveOutlined />,
      },
      {
        name: "FilterAddOutlined",
        icon: <Icon.FilterAddOutlined />,
      },
      {
        name: "FilterSearchOutlined",
        icon: <Icon.FilterSearchOutlined />,
      },
      {
        name: "FilterEditOutlined",
        icon: <Icon.FilterEditOutlined />,
      },
      {
        name: "FilterTickOutlined",
        icon: <Icon.FilterTickOutlined />,
      },
      {
        name: "HomeOutlined",
        icon: <Icon.HomeOutlined />,
      },
      {
        name: "SmartHomeOutlined",
        icon: <Icon.SmartHomeOutlined />,
      },
      {
        name: "HomeWifiOutlined",
        icon: <Icon.HomeWifiOutlined />,
      },
      {
        name: "SafeHomeOutlined",
        icon: <Icon.SafeHomeOutlined />,
      },
    ],
  },
  {
    title: "Support, Like, Question",
    icons: [
      {
        name: "StarOutlined",
        icon: <Icon.StarOutlined />,
      },
      {
        name: "StarSlashOutlined",
        icon: <Icon.StarSlashOutlined />,
      },
      {
        name: "HeartOutlined",
        icon: <Icon.HeartOutlined />,
      },
      {
        name: "LikeOutlined",
        icon: <Icon.LikeOutlined />,
      },
      {
        name: "DislikeOutlined",
        icon: <Icon.DislikeOutlined />,
      },
      {
        name: "Star1Outlined",
        icon: <Icon.Star1Outlined />,
      },
      {
        name: "Ranking1Outlined",
        icon: <Icon.Ranking1Outlined />,
      },
      {
        name: "MagicStarOutlined",
        icon: <Icon.MagicStarOutlined />,
      },
      {
        name: "HeartEditOutlined",
        icon: <Icon.HeartEditOutlined />,
      },
      {
        name: "HeartTickOutlined",
        icon: <Icon.HeartTickOutlined />,
      },
      {
        name: "HeartSearchOutlined",
        icon: <Icon.HeartSearchOutlined />,
      },
      {
        name: "HeartSlashOutlined",
        icon: <Icon.HeartSlashOutlined />,
      },
      {
        name: "HeartRemoveOutlined",
        icon: <Icon.HeartRemoveOutlined />,
      },
      {
        name: "HeartAddOutlined",
        icon: <Icon.HeartAddOutlined />,
      },
      {
        name: "SmileysOutlined",
        icon: <Icon.SmileysOutlined />,
      },
      {
        name: "LikeDislikeOutlined",
        icon: <Icon.LikeDislikeOutlined />,
      },
      {
        name: "LikeTagOutlined",
        icon: <Icon.LikeTagOutlined />,
      },
      {
        name: "Support24Outlined",
        icon: <Icon.Support24Outlined />,
      },
      {
        name: "LikeShapesOutlined",
        icon: <Icon.LikeShapesOutlined />,
      },
      {
        name: "MessageQuestionOutlined",
        icon: <Icon.MessageQuestionOutlined />,
      },
      {
        name: "MedalStarOutlined",
        icon: <Icon.MedalStarOutlined />,
      },
      {
        name: "LovelyOutlined",
        icon: <Icon.LovelyOutlined />,
      },
      {
        name: "MedalOutlined",
        icon: <Icon.MedalOutlined />,
      },
      {
        name: "UnlimitedOutlined",
        icon: <Icon.UnlimitedOutlined />,
      },
      {
        name: "Like1Outlined",
        icon: <Icon.Like1Outlined />,
      },
      {
        name: "HeartCircleOutlined",
        icon: <Icon.HeartCircleOutlined />,
      },
    ],
  },
  {
    title: "Notification",
    icons: [
      {
        name: "NotificationBingOutlined",
        icon: <Icon.NotificationBingOutlined />,
      },
      {
        name: "NotificationOutlined",
        icon: <Icon.NotificationOutlined />,
      },
      {
        name: "Notification1Outlined",
        icon: <Icon.Notification1Outlined />,
      },
      {
        name: "NotificationFavoriteOutlined",
        icon: <Icon.NotificationFavoriteOutlined />,
      },
      {
        name: "NotificationStatusOutlined",
        icon: <Icon.NotificationStatusOutlined />,
      },
      {
        name: "NotificationCircleOutlined",
        icon: <Icon.NotificationCircleOutlined />,
      },
      {
        name: "LampOnOutlined",
        icon: <Icon.LampOnOutlined />,
      },
      {
        name: "LampChargeOutlined",
        icon: <Icon.LampChargeOutlined />,
      },
      {
        name: "LampSlashOutlined",
        icon: <Icon.LampSlashOutlined />,
      },
    ],
  },
  {
    title: "Setting",
    icons: [
      {
        name: "CategoryOutlined",
        icon: <Icon.CategoryOutlined />,
      },
      {
        name: "Category2Outlined",
        icon: <Icon.Category2Outlined />,
      },
      {
        name: "SettingOutlined",
        icon: <Icon.SettingOutlined />,
      },
      {
        name: "Setting2Outlined",
        icon: <Icon.Setting2Outlined />,
      },
      {
        name: "Setting3Outlined",
        icon: <Icon.Setting3Outlined />,
      },
      {
        name: "Setting4Outlined",
        icon: <Icon.Setting4Outlined />,
      },
      {
        name: "Setting5Outlined",
        icon: <Icon.Setting5Outlined />,
      },
      {
        name: "MoreOutlined",
        icon: <Icon.MoreOutlined />,
      },
      {
        name: "More2Outlined",
        icon: <Icon.More2Outlined />,
      },
      {
        name: "ToggleOffOutlined",
        icon: <Icon.ToggleOffOutlined />,
      },
      {
        name: "ToggleOnOutlined",
        icon: <Icon.ToggleOnOutlined />,
      },
      {
        name: "ToggleOffCircleOutlined",
        icon: <Icon.ToggleOffCircleOutlined />,
      },
      {
        name: "ToggleOnCircleOutlined",
        icon: <Icon.ToggleOnCircleOutlined />,
      },
      {
        name: "Menu1Outlined",
        icon: <Icon.Menu1Outlined />,
      },
      {
        name: "CandleOutlined",
        icon: <Icon.CandleOutlined />,
      },
      {
        name: "SettingsOutlined",
        icon: <Icon.SettingsOutlined />,
      },
      {
        name: "Candle2Outlined",
        icon: <Icon.Candle2Outlined />,
      },
    ],
  },
  {
    title: "Archive",
    icons: [
      {
        name: "ArchiveTickOutlined",
        icon: <Icon.ArchiveTickOutlined />,
      },
      {
        name: "Archive1Outlined",
        icon: <Icon.Archive1Outlined />,
      },
      {
        name: "ArchiveSlashOutlined",
        icon: <Icon.ArchiveSlashOutlined />,
      },
      {
        name: "ArchiveAddOutlined",
        icon: <Icon.ArchiveAddOutlined />,
      },
      {
        name: "ArchiveMinusOutlined",
        icon: <Icon.ArchiveMinusOutlined />,
      },
      {
        name: "ReceiptSquareOutlined",
        icon: <Icon.ReceiptSquareOutlined />,
      },
      {
        name: "BookSquareOutlined",
        icon: <Icon.BookSquareOutlined />,
      },
      {
        name: "Save2Outlined",
        icon: <Icon.Save2Outlined />,
      },
      {
        name: "SaveAddOutlined",
        icon: <Icon.SaveAddOutlined />,
      },
      {
        name: "SaveMinusOutlined",
        icon: <Icon.SaveMinusOutlined />,
      },
      {
        name: "SaveRemoveOutlined",
        icon: <Icon.SaveRemoveOutlined />,
      },
      {
        name: "BookSavedOutlined",
        icon: <Icon.BookSavedOutlined />,
      },
    ],
  },
  {
    title: "Time",
    icons: [
      {
        name: "TimerOutlined",
        icon: <Icon.TimerOutlined />,
      },
      {
        name: "ClockOutlined",
        icon: <Icon.ClockOutlined />,
      },
      {
        name: "Timer1Outlined",
        icon: <Icon.Timer1Outlined />,
      },
      {
        name: "TimerPauseOutlined",
        icon: <Icon.TimerPauseOutlined />,
      },
      {
        name: "TimerStartOutlined",
        icon: <Icon.TimerStartOutlined />,
      },
      {
        name: "SecurityTimeOutlined",
        icon: <Icon.SecurityTimeOutlined />,
      },
      {
        name: "CalendarOutlined",
        icon: <Icon.CalendarOutlined />,
      },
      {
        name: "CalendarTickOutlined",
        icon: <Icon.CalendarTickOutlined />,
      },
      {
        name: "CalendarSearchOutlined",
        icon: <Icon.CalendarSearchOutlined />,
      },
      {
        name: "CalendarRemoveOutlined",
        icon: <Icon.CalendarRemoveOutlined />,
      },
      {
        name: "CalendarAddOutlined",
        icon: <Icon.CalendarAddOutlined />,
      },
      {
        name: "CalendarEditOutlined",
        icon: <Icon.CalendarEditOutlined />,
      },
      {
        name: "Calendar2Outlined",
        icon: <Icon.Calendar2Outlined />,
      },
      {
        name: "CalendarCircleOutlined",
        icon: <Icon.CalendarCircleOutlined />,
      },
      {
        name: "Calendar1Outlined",
        icon: <Icon.Calendar1Outlined />,
      },
    ],
  },
  {
    title: "Computer, Devices, Electronic",
    icons: [
      {
        name: "CpuOutlined",
        icon: <Icon.CpuOutlined />,
      },
      {
        name: "PrinterOutlined",
        icon: <Icon.PrinterOutlined />,
      },
      {
        name: "PrinterSlashOutlined",
        icon: <Icon.PrinterSlashOutlined />,
      },
      {
        name: "CpuChargeOutlined",
        icon: <Icon.CpuChargeOutlined />,
      },
      {
        name: "CpuSettingOutlined",
        icon: <Icon.CpuSettingOutlined />,
      },
      {
        name: "MonitorOutlined",
        icon: <Icon.MonitorOutlined />,
      },
      {
        name: "MonitorRecorderOutlined",
        icon: <Icon.MonitorRecorderOutlined />,
      },
      {
        name: "MonitorMobbileOutlined",
        icon: <Icon.MonitorMobbileOutlined />,
      },
      {
        name: "HeadphoneOutlined",
        icon: <Icon.HeadphoneOutlined />,
      },
      {
        name: "AirpodOutlined",
        icon: <Icon.AirpodOutlined />,
      },
      {
        name: "SpeakerOutlined",
        icon: <Icon.SpeakerOutlined />,
      },
      {
        name: "DriverOutlined",
        icon: <Icon.DriverOutlined />,
      },
      {
        name: "Driver2Outlined",
        icon: <Icon.Driver2Outlined />,
      },
      {
        name: "DriverRefreshOutlined",
        icon: <Icon.DriverRefreshOutlined />,
      },
      {
        name: "CloudAddOutlined",
        icon: <Icon.CloudAddOutlined />,
      },
      {
        name: "CloudRemoveOutlined",
        icon: <Icon.CloudRemoveOutlined />,
      },
      {
        name: "ExternalDriveOutlined",
        icon: <Icon.ExternalDriveOutlined />,
      },
      {
        name: "CloudConnectionOutlined",
        icon: <Icon.CloudConnectionOutlined />,
      },
      {
        name: "MusicPlayOutlined",
        icon: <Icon.MusicPlayOutlined />,
      },
      {
        name: "Devices1Outlined",
        icon: <Icon.Devices1Outlined />,
      },
      {
        name: "AirpodsOutlined",
        icon: <Icon.AirpodsOutlined />,
      },
      {
        name: "HeadphonesOutlined",
        icon: <Icon.HeadphonesOutlined />,
      },
      {
        name: "FolderConnectionOutlined",
        icon: <Icon.FolderConnectionOutlined />,
      },
      {
        name: "GameOutlined",
        icon: <Icon.GameOutlined />,
      },
      {
        name: "Weight1Outlined",
        icon: <Icon.Weight1Outlined />,
      },
      {
        name: "KeyboardOutlined",
        icon: <Icon.KeyboardOutlined />,
      },
      {
        name: "Mouse1Outlined",
        icon: <Icon.Mouse1Outlined />,
      },
      {
        name: "Clock1Outlined",
        icon: <Icon.Clock1Outlined />,
      },
      {
        name: "RamOutlined",
        icon: <Icon.RamOutlined />,
      },
      {
        name: "Ram2Outlined",
        icon: <Icon.Ram2Outlined />,
      },
      {
        name: "SimcardOutlined",
        icon: <Icon.SimcardOutlined />,
      },
      {
        name: "Simcard2Outlined",
        icon: <Icon.Simcard2Outlined />,
      },
      {
        name: "Lamp1Outlined",
        icon: <Icon.Lamp1Outlined />,
      },
      {
        name: "MobileOutlined",
        icon: <Icon.MobileOutlined />,
      },
      {
        name: "ElectricityOutlined",
        icon: <Icon.ElectricityOutlined />,
      },
      {
        name: "MirroringScreenOutlined",
        icon: <Icon.MirroringScreenOutlined />,
      },
      {
        name: "MicroscopeOutlined",
        icon: <Icon.MicroscopeOutlined />,
      },
      {
        name: "Simcard1Outlined",
        icon: <Icon.Simcard1Outlined />,
      },
      {
        name: "KeyboardOpenOutlined",
        icon: <Icon.KeyboardOpenOutlined />,
      },
      {
        name: "AirdropOutlined",
        icon: <Icon.AirdropOutlined />,
      },
      {
        name: "GameboyOutlined",
        icon: <Icon.GameboyOutlined />,
      },
      {
        name: "WatchOutlined",
        icon: <Icon.WatchOutlined />,
      },
      {
        name: "WatchStatusOutlined",
        icon: <Icon.WatchStatusOutlined />,
      },
      {
        name: "BluetoothOutlined",
        icon: <Icon.BluetoothOutlined />,
      },
      {
        name: "Bluetooth2Outlined",
        icon: <Icon.Bluetooth2Outlined />,
      },
      {
        name: "BluetoothCircleOutlined",
        icon: <Icon.BluetoothCircleOutlined />,
      },
      {
        name: "BluetoothRectangleOutlined",
        icon: <Icon.BluetoothRectangleOutlined />,
      },
      {
        name: "CloudChangeOutlined",
        icon: <Icon.CloudChangeOutlined />,
      },
    ],
  },
  {
    title: "Call",
    icons: [
      {
        name: "CallOutlined",
        icon: <Icon.CallOutlined />,
      },
      {
        name: "CallCallingOutlined",
        icon: <Icon.CallCallingOutlined />,
      },
      {
        name: "CallIncomingOutlined",
        icon: <Icon.CallIncomingOutlined />,
      },
      {
        name: "CallOutgoingOutlined",
        icon: <Icon.CallOutgoingOutlined />,
      },
      {
        name: "CallAddOutlined",
        icon: <Icon.CallAddOutlined />,
      },
      {
        name: "CallMinusOutlined",
        icon: <Icon.CallMinusOutlined />,
      },
      {
        name: "CallRemoveOutlined",
        icon: <Icon.CardRemoveOutlined />,
      },
      {
        name: "CallReceivedOutlined",
        icon: <Icon.CallReceivedOutlined />,
      },
      {
        name: "CallSlashOutlined",
        icon: <Icon.CallSlashOutlined />,
      },
    ],
  },
  {
    title: "Business",
    icons: [
      {
        name: "ChartSuccessOutlined",
        icon: <Icon.ChartSuccessOutlined />,
      },
      {
        name: "ChartFailOutlined",
        icon: <Icon.ChartFailOutlined />,
      },
      {
        name: "Chart2Outlined",
        icon: <Icon.Chart2Outlined />,
      },
      {
        name: "GraphOutlined",
        icon: <Icon.GraphOutlined />,
      },
      {
        name: "ActivityOutlined",
        icon: <Icon.ActivityOutlined />,
      },
      {
        name: "HomeTrendUpOutlined",
        icon: <Icon.HomeTrendUpOutlined />,
      },
      {
        name: "HomeTrendDownOutlined",
        icon: <Icon.HomeTrendDownOutlined />,
      },
      {
        name: "HomeHashtagOutlined",
        icon: <Icon.HomeHashtagOutlined />,
      },
      {
        name: "TrendUpOutlined",
        icon: <Icon.TrendUpOutlined />,
      },
      {
        name: "TrendDownOutlined",
        icon: <Icon.TrendDownOutlined />,
      },
      {
        name: "Hashtag1Outlined",
        icon: <Icon.Hashtag1Outlined />,
      },
      {
        name: "Chart1Outlined",
        icon: <Icon.Chart1Outlined />,
      },
      {
        name: "PersonalcardOutlined",
        icon: <Icon.PersonalcardOutlined />,
      },
      {
        name: "StatusUpOutlined",
        icon: <Icon.StatusUpOutlined />,
      },
      {
        name: "DiagramOutlined",
        icon: <Icon.DiagramOutlined />,
      },
      {
        name: "PresentionChartOutlined",
        icon: <Icon.PresentionChartOutlined />,
      },
      {
        name: "Chart3Outlined",
        icon: <Icon.Chart3Outlined />,
      },
      {
        name: "Chart21Outlined",
        icon: <Icon.Chart21Outlined />,
      },
      {
        name: "HealthOutlined",
        icon: <Icon.HealthOutlined />,
      },
      {
        name: "FavoriteChartOutlined",
        icon: <Icon.FavoriteChartOutlined />,
      },
    ],
  },
  {
    title: "Security",
    icons: [
      {
        name: "BuildingOutlined",
        icon: <Icon.BuildingOutlined />,
      },
      {
        name: "CourthouseOutlined",
        icon: <Icon.CourthouseOutlined />,
      },
      {
        name: "HouseOutlined",
        icon: <Icon.HouseOutlined />,
      },
      {
        name: "House2Outlined",
        icon: <Icon.House2Outlined />,
      },
      {
        name: "BuildingsOutlined",
        icon: <Icon.BuildingsOutlined />,
      },
      {
        name: "BankOutlined",
        icon: <Icon.BankOutlined />,
      },
      {
        name: "Buildings2Outlined",
        icon: <Icon.Buildings2Outlined />,
      },
      {
        name: "Building3Outlined",
        icon: <Icon.Building3Outlined />,
      },
      {
        name: "Building4Outlined",
        icon: <Icon.Building4Outlined />,
      },
      {
        name: "HospitalOutlined",
        icon: <Icon.HospitalOutlined />,
      },
    ],
  },
  {
    title: "Astrology",
    icons: [
      {
        name: "AquariusOutlined",
        icon: <Icon.AquariusOutlined />,
      },
      {
        name: "GeminiOutlined",
        icon: <Icon.GeminiOutlined />,
      },
      {
        name: "Gemini2Outlined",
        icon: <Icon.Gemini2Outlined />,
      },
      {
        name: "SagittariusOutlined",
        icon: <Icon.SagittariusOutlined />,
      },
      {
        name: "ManOutlined",
        icon: <Icon.ManOutlined />,
      },
      {
        name: "WomanOutlined",
        icon: <Icon.WomanOutlined />,
      },
    ],
  },
  {
    title: "Search",
    icons: [
      {
        name: "SearchNormalOutlined",
        icon: <Icon.SearchNormalOutlined />,
      },
      {
        name: "SearchZoomInOutlined",
        icon: <Icon.SearchZoomInOutlined />,
      },
      {
        name: "SearchZoomOutOutlined",
        icon: <Icon.SearchZoomOutOutlined />,
      },
      {
        name: "SearchFavoriteOutlined",
        icon: <Icon.SearchFavoriteOutlined />,
      },
      {
        name: "SearchStatusOutlined",
        icon: <Icon.SearchStatusOutlined />,
      },
      {
        name: "SearchNormal1Outlined",
        icon: <Icon.SearchNormal1Outlined />,
      },
      {
        name: "SearchZoomIn1Outlined",
        icon: <Icon.SearchZoomIn1Outlined />,
      },
      {
        name: "SearchZoomOut1Outlined",
        icon: <Icon.SearchZoomOut1Outlined />,
      },
      {
        name: "SearchFavorite1Outlined",
        icon: <Icon.SearchFavorite1Outlined />,
      },
      {
        name: "SearchStatus1Outlined",
        icon: <Icon.SearchStatus1Outlined />,
      },
    ],
  },
];
