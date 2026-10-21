import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const MEMBERS = [
  {
    id: 'M01',
    name: 'นายนฤสรณ์ อีสา',
    studentId: '368305221010',
    classroom: 'ISD36821N',
    role: 'วางแผนและออกแบบแอป',
  },
  {
    id: 'M02',
    name: 'นางสาวรุจิรา กาฬภักดี',
    studentId: '368305221018',
    classroom: 'ISD36821N',
    role: 'พัฒนาแอปและจัดเตรียมข้อมูล',
  },
  {
    id: 'M03',
    name: 'นางสาวอลิสา ทองอินศรี',
    studentId: '368305221027',
    classroom: 'ISD36821N',
    role: 'ทดสอบแอปและจัดทำรายงาน',
  },
];

export default function TeamScreen() {
  const { width, fontScale } = useWindowDimensions();

  const padding = width < 400 ? 14 : 24;
  const contentWidth = Math.max(
    0,
    Math.min(width, 1160) - padding * 2
  );

  const scale = Math.max(1, fontScale);

  const columns =
    contentWidth >= 1000 * scale
      ? 3
      : contentWidth >= 620 * scale
        ? 2
        : 1;

  const gap = 16;

  const cardWidth = Math.max(
    0,
    (contentWidth - gap * (columns - 1)) / columns
  );

  const rows = [];

  for (let i = 0; i < MEMBERS.length; i += columns) {
    rows.push(MEMBERS.slice(i, i + columns));
  }

  return (
    <View style={localStyles.screen}>
      <ScrollView
        style={localStyles.scroll}
        contentContainerStyle={localStyles.scrollContent}
        showsVerticalScrollIndicator
        removeClippedSubviews={false}
      >
        <View
          style={[
            localStyles.content,
            { paddingHorizontal: padding },
          ]}
        >
          <View style={localStyles.heading}>
            <Text style={localStyles.title}>
              OUR TEAM
            </Text>

            <Text style={localStyles.subtitle}>
              สมาชิกผู้จัดทำโครงงาน
            </Text>

            <Text style={localStyles.count}>
              สมาชิกทั้งหมด {MEMBERS.length} คน
            </Text>

          </View>

          {rows.map((row, rowIndex) => (
            <View
              key={`row-${rowIndex}`}
              style={localStyles.row}
            >
              {row.map((member, index) => {
                const memberNumber =
                  rowIndex * columns + index + 1;

                return (
                  <View
                    key={member.id}
                    style={[
                      localStyles.card,
                      {
                        width: cardWidth,
                        marginRight:
                          index < row.length - 1 ? gap : 0,
                      },
                    ]}
                  >
                    <Text style={localStyles.memberNumber}>
                      สมาชิกคนที่ {memberNumber}
                    </Text>

                    <Text style={localStyles.emoji}>
                      🧑‍💻
                    </Text>

                    <Text style={localStyles.name}>
                      {member.name}
                    </Text>

                    <Text style={localStyles.studentId}>
                      รหัสนักศึกษา
                    </Text>

                    <Text style={localStyles.studentValue}>
                      {member.studentId}
                    </Text>

                    <Text style={localStyles.classroom}>
                      ห้องเรียน: {member.classroom}
                    </Text>

                    <View style={localStyles.roleBox}>
                      <Text style={localStyles.role}>
                        {member.role}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          ))}

          <Text style={localStyles.note}>
            ร่วมกันพัฒนาแอป CAT WORLD · โลกของแมว 🐾
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F7FC',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 32,
  },

  content: {
    width: '100%',
    maxWidth: 1160,
    alignSelf: 'center',
    paddingTop: 20,
  },

  heading: {
    alignItems: 'center',
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#19364A',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#737D85',
    textAlign: 'center',
    marginTop: 8,
  },

  count: {
    fontSize: 15,
    color: '#43876A',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },

  version: {
    fontSize: 12,
    color: '#737D85',
    textAlign: 'center',
    marginTop: 6,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  card: {
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E7DFF0',
    paddingHorizontal: 18,
    paddingVertical: 24,
    alignItems: 'center',
  },

  memberNumber: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#19364A',
    textAlign: 'center',
    marginBottom: 16,
  },

  emoji: {
    fontSize: 46,
    marginBottom: 16,
  },

  name: {
    alignSelf: 'stretch',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#303740',
    textAlign: 'center',
    marginBottom: 16,
  },

  studentId: {
    fontSize: 15,
    color: '#43876A',
    textAlign: 'center',
  },

  studentValue: {
    alignSelf: 'stretch',
    fontSize: 17,
    color: '#43876A',
    textAlign: 'center',
    marginTop: 4,
  },

  classroom: {
    alignSelf: 'stretch',
    fontSize: 16,
    color: '#58616A',
    textAlign: 'center',
    marginTop: 14,
  },

  roleBox: {
    alignSelf: 'stretch',
    backgroundColor: '#E8F3E9',
    borderRadius: 14,
    padding: 16,
    marginTop: 18,
  },

  role: {
    fontSize: 15,
    color: '#38634F',
    textAlign: 'center',
  },

  note: {
    fontSize: 15,
    color: '#58745E',
    backgroundColor: '#E8F2E6',
    borderRadius: 14,
    padding: 16,
    textAlign: 'center',
    marginTop: 4,
  },
});
